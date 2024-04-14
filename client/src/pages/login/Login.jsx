import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import React from "react";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Email and password validation
        if (!email.trim() || !password.trim()) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            await login({ email, password }, dispatch);
            navigate("/home");
        } catch (err) {
            alert("Incorrect email or password. Please try again.");
            console.log(err);
        }
    };

    // Function to navigate to the register page
    const navigateToRegister = () => {
        navigate("/register");
    };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="../public/s.png" alt="" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    {/* Assign onClick event handler to navigate to register page */}
                    <span onClick={navigateToRegister}>New to STREAMIFY <b>Sign up now</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a robot. <b>Learn more</b>.</small>
                </form>
            </div>
        </div>
    );
}
