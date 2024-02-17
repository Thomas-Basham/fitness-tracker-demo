import React, { useState } from "react";
import { register } from "../../firebase-auth-utility";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      console.log("User registered successfully");
      // Handle successful registration (e.g., navigate to dashboard)
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Handle registration errors (e.g., show error message)
    }
  };

  return (
    <form className="border p-2 m-2" onSubmit={handleSubmit}>
      <legend>Register</legend>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
