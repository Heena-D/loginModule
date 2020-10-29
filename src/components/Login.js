import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errortext: { username: "", password: "" },
      error: { username: false, password: false }
    };
  }

  usernameHandler = e => {
    this.setState({ username: e.target.value });
  };

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  submitHandler = () => {
    const { username, password } = this.state;
    if (username !== "" && password !== "") {
      this.props.history.push({ pathname: "/home", name: username });
    } else {
      this.setState({
        error: {
          username: username ? false : true,
          password: password ? false : true
        },
        errortext: {
          username: username ? "" : "username cant be empty",
          password: password ? "" : "password cant be empty"
        }
      });
    }
  };

  componentDidMount = () => {
    let localuserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (localuserInfo) {
      this.setState({
        username: localuserInfo.username,
        email: localuserInfo.email,
        password: localuserInfo.password
      });
    }
  };

  render() {
    return (
      <div>
        <form autoComplete="off" style={{ padding: "2%" }}>
          <Typography variant="h6">Login Form</Typography>
          <TextField
            label="Username"
            variant="filled"
            error={this.state.error.username}
            value={this.state.username}
            onChange={e => this.usernameHandler(e)}
            helperText={this.state.errortext.username}
            style={{ margin: "2%" }}
          />
          <TextField
            type="password"
            label="Password"
            variant="filled"
            value={this.state.password}
            error={this.state.error.password}
            onChange={e => this.passwordHandler(e)}
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
        <Typography variant="body1">
          Click{" "}
          <span
            style={{ color: "blue" }}
            onClick={() => this.props.history.push("/register")}
          >
            Register
          </span>{" "}
          to create account
        </Typography>
      </div>
    );
  }
}

export default Login;
