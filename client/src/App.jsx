import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import SubscriptionPage from "./components/subscription/SubscriptionPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import InjectCheckout from "./components/card/Card";

const stripePromise = loadStripe("pk_test_51P49QG01vqEKj0w448mkwUIjY57iIB0etigeT9PiIcBu3sw2Q93tfvJJoBzJc9b4mueN2MSGN8L1nijjWmw7Q2y500Syy7AxDM");

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Home type="movie" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/subscription" element={<SubscriptionPage />} /> {/* Add route for the subscription page */}
        <Route path="/card" element={<Elements stripe={stripePromise}><InjectCheckout /></Elements>} />
      </Routes>
    </Router>
  );
};

export default App;
