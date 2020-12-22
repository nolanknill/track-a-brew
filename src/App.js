import "./App.css";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Hero />
      </div>
    </Router>
  );
}

export default App;
