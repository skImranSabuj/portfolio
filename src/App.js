import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./contex/AuthProvider";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home/Home";

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/shipping">
                <Shipping></Shipping>
              </PrivateRoute>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login
                ></Login>
              </Route>
            </Switch>

          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
