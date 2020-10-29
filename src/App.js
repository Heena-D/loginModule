import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/home" render={props => <Home {...props} />} />
          {/* <Route
          path={this.props.match.url}
          render={props => <ClgList {...props} base={this.props.match.url} />}
        /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
