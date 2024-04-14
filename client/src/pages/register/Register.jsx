import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignInClick = () => {
        // Navigate to the login page
        navigate("/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password validation (at least 8 characters long)
        if (formData.password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        try {
            await axios.post("http://localhost:8800/api/auth/register", formData);
            navigate("/subscription");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="../public/s.png" alt="" />
               
                </div>
             
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>watch anywhere. cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your details to create an account.
                </p>
                <form className="input" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password (min. 8 characters)" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                
                    <button className="registerButton" type="submit">
                        Start
                    </button>
                   
                </form>
                <button className="loginButton"onClick={handleSignInClick}>
                 Already a user ? Sign In
                    </button>
            </div>
        </div>
    );
}
