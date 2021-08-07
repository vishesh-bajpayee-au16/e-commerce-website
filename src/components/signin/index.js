import React, { useState } from "react";
import "./index.scss";
import FormInput from "../formInput";
import CustomButton from "../CustomButton";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return null;
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          value={email}
          type="email"
          label="email"
          required
        />

        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          value={password}
          label="password"
        />

        <CustomButton type="submit">SIGN IN </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;