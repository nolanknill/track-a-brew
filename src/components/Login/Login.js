import React, { Component } from "react";

export default class Login extends Component {
  state = {
    form: "login",
  };

  enableRegisterForm = () => {
    this.setState({
      form: "register",
    });
  };

  render() {
    return (
      <div className="login">
        <h2>{this.state.form === "login" ? "Log-In" : "Register"}</h2>
        <form>
          <label for="e-mail">E-mail:</label>
          <input type="text" id="e-mail"></input>
          <label for="password">Password:</label>
          <input type="password" id="password"></input>
          <input
            type="submit"
            value={this.state.form === "login" ? "Log-In" : "Register"}
          />
        </form>
        <p>
          Don't have an account?
          <button onClick={this.enableRegisterForm}>Sign up here</button>
        </p>
      </div>
    );
  }
}
