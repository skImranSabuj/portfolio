import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  BrowserRouter,
  Routes,
  // Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Experiences from "./Pages/Experiences/Experiences";

import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <AuthProvider className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
