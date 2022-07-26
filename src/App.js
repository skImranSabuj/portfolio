import React from "react";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
  // Routes,
} from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Experiences from "./Pages/Experiences/Experiences";

function App() {
  return (
    <AuthProvider className="App">
      {/* <Header></Header> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<App />}> */}
          {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          {/* </Route> */}
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}
    </AuthProvider>
  );
}

export default App;
