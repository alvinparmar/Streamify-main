import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./SubscriptionForm.css";

const SubscriptionForm = ({ selectedPlan }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [name, setName] = useState("");
	// const [email, setEmail] = useState('');

	// Function to calculate amount based on selected plan
	const calculateAmount = () => {
		return selectedPlan === "monthly" ? 10 : 100;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		// Calculate amount
		const amount = calculateAmount();

		// Create a payment method using the card element
		const cardElement = elements.getElement(CardElement);
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			console.log(error.message);
			return;
		}

		// Send payment method and user details to your server to create a charge
		try {
			const response = await fetch("http://localhost:8800/create-payment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					paymentMethodId: paymentMethod.id,
					name,

					amount, // Use the calculated amount
				}),
			});

			if (response.ok) {
				const data = await response.json();
				// Extract the client secret from the response
				const clientSecret = data.clientSecret;
				// Redirect to the Checkout page with the client secret
				const { error } = await stripe.confirmCardPayment(clientSecret);
				if (error) {
					console.error("Error confirming payment:", error);
				} else {
					// Payment succeeded, redirect to the home page
					window.location.href = "http://localhost:5173/home";
				}
			} else {
				console.log("Failed to process payment");
			}
		} catch (error) {
			console.error("Error processing payment:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name:</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			{/* <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div> */}
			<div>
				<label>Card Details:</label>
				<CardElement />
			</div>
			<button type="submit">Pay Now</button>
		</form>
	);
};

export default SubscriptionForm;
