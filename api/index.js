const express = require("express");
const app = express();
const stripe = require('stripe')("sk_test_51P49QG01vqEKj0w4T7DsfPRl2A1qDtBavATOIw2JLwi5sWNWnjALxukAPCWFZCDfrk8hrOx4b3RJaahhJKUhv2xw00wWAYjmpb");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
dotenv.config();
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB Connection successfull"))
	.catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.post('/create-payment', async (req, res) => {
	const { paymentMethodId, name,  amount } = req.body;
	
	try {
	  // Create a payment intent
	  const paymentIntent = await stripe.paymentIntents.create({
		amount: amount * 100, // Convert amount to cents
		currency: 'usd',
		payment_method: paymentMethodId,
		description: 'Custom Payment',
		//receipt_email: email,
	  });
	
	  // Confirm the payment intent with return_url
	  const confirmPayment = await stripe.paymentIntents.confirm(paymentIntent.id, {
		return_url: 'http://localhost:5173', // Replace with your actual success URL
	  });
  
	  // Extract the client secret from the confirmed payment intent
	  const clientSecret = confirmPayment.client_secret;
  
	  // Send the client secret as part of the response
	  res.status(200).json({ clientSecret });
	} catch (error) {
	  console.error('Error processing payment:', error);
	  res.status(500).json({ error: 'Failed to process payment' });
	}
  });
  
const PORT = 8800;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
