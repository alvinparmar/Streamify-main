import React, { Component } from "react";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardSection from "./CardSection";
import "./card.scss";

const stripePromise = loadStripe(
	"pk_test_51P49QG01vqEKj0w448mkwUIjY57iIB0etigeT9PiIcBu3sw2Q93tfvJJoBzJc9b4mueN2MSGN8L1nijjWmw7Q2y500Syy7AxDM"
);

class Card extends Component {
	handleSubmit = async (event) => {
		event.preventDefault();
		const { stripe, elements } = this.props;
		if (!stripe || !elements) return;

		const card = elements.getElement(CardElement);
		const result = await stripe.createToken(card);
		if (result.error) {
			console.log(result.error.message);
		} else {
			console.log(result.token);
		}
	};

	render() {
		return (
			<div className="card-page">
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<CardSection />
						<button>Subscribe Now</button>
					</form>
				</div>
			</div>
		);
	}
}

export default function InjectCheckout() {
	return (
		<Elements stripe={stripePromise}>
			<Card />
		</Elements>
	);
}
