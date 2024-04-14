import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SubscriptionForm from "./SubscriptionForm";
import "./SubscriptionPage.css";

const stripePromise = loadStripe(
	"pk_test_51P49QG01vqEKj0w448mkwUIjY57iIB0etigeT9PiIcBu3sw2Q93tfvJJoBzJc9b4mueN2MSGN8L1nijjWmw7Q2y500Syy7AxDM"
);

const SubscriptionPage = () => {
	const [selectedPlan, setSelectedPlan] = useState("monthly");
	const [planAmount, setPlanAmount] = useState(10);

	const handlePlanChange = (plan) => {
		setSelectedPlan(plan);
		setPlanAmount(plan === "monthly" ? 10 : 100);
	};

	return (
		<div className="subscription-page">
			<h1>Subscribe to enjoy all the latest movies and series</h1>
			<div className="subscription-options">
				<div>
					<input
						type="radio"
						id="monthly"
						name="plan"
						value="monthly"
						checked={selectedPlan === "monthly"}
						onChange={() => handlePlanChange("monthly")}
					/>
					<label htmlFor="monthly">Monthly Subscription ($10/month)</label>
				</div>
				<div>
					<input
						type="radio"
						id="yearly"
						name="plan"
						value="yearly"
						checked={selectedPlan === "yearly"}
						onChange={() => handlePlanChange("yearly")}
					/>
					<label htmlFor="yearly">Yearly Subscription ($100/year)</label>
				</div>
			</div>
			<div className="subscription-form">
				<p>Amount: ${planAmount}</p>
				<Elements stripe={stripePromise}>
					<SubscriptionForm selectedPlan={selectedPlan} />
				</Elements>
			</div>
		</div>
	);
};

export default SubscriptionPage;
