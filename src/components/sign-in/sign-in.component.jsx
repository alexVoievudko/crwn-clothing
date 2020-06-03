import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.components";

import "./sign-in.styles.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
