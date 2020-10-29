import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      errortext: { username: "", password: "", email: "" },
      error: { username: false, password: false, email: false }
    };
  }

  emailHandler = e => {
    this.setState({ email: e.target.value });
  };
  usernameHandler = e => {
    this.setState({ username: e.target.value });
  };

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  submitHandler = () => {
    const { username, password, email } = this.state;
    if (username !== "" && password !== "" && email !== "") {
      let userInfo = { username: username, email: email, password: password };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.props.history.push({ pathname: "/home", name: username });
    } else {
      this.setState({
        error: {
          username: username ? false : true,
          password: password ? false : true,
          email: email ? false : true
        },
        errortext: {
          username: username ? "" : "username cant be empty",
          password: password ? "" : "password cant be empty",
          email: email ? "" : "email cant be empty"
        }
      });
    }
  };

  render() {
    return (
      <div style={{ padding: "2%" }}>
        <Typography variant="h6">Register Here</Typography>
        <form autoComplete="off">
          <TextField
            label="Email"
            variant="filled"
            onChange={e => this.emailHandler(e)}
            error={this.state.error.email}
            helperText={this.state.errortext.email}
            style={{ margin: "2%" }}
          />

          <TextField
            label="Username"
            variant="filled"
            onChange={e => this.usernameHandler(e)}
            error={this.state.error.username}
            helperText={this.state.errortext.username}
            style={{ margin: "2%" }}
          />
          <TextField
            type="password"
            label="Password"
            variant="filled"
            onChange={e => this.passwordHandler(e)}
            error={this.state.error.password}
            helperText={this.state.errortext.password}
            style={{ margin: "2%" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.submitHandler}
            style={{ display: "block", textAlign: "center", margin: "0 auto" }}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Register;
