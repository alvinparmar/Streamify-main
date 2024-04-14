import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import "./cardSection.scss";

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: "green",
			fontSize: "24px",
			fontFamily: "sans-serif",
			"::placeholder": {
				color: "#CDF7DF",
			},
		},
		invalid: {
			color: "red",
			":focus": {
				color: "red",
			},
		},
	},
};

export default function CardSection() {
	return (
		<label className="card-section">
			<div className="payment-label">Payment</div>
			<div className="card-details-label">Fill in the card details</div>
			<CardElement options={CARD_ELEMENT_OPTIONS} className="card-element" />
		</label>
	);
}
