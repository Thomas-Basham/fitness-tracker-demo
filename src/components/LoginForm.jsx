import React from "react";
import { useState } from "react";
import { login } from "../../firebase-auth-utility";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      console.log("Login successful");
      // Handle successful login (e.g., navigate to dashboard)
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login errors (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-2 m-2">
      <legend>Login </legend>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
