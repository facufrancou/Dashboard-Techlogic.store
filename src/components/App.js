import React from "react";
import "../styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Carrete from "./Carrete";
import LastProducts from "./LastProducts";
import LastUsers from "./LastUsers";
import Users from "./Users";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        <Routes>
        {/* <a href="/usuarios"> Ir a Usuarios</a> */}
          <Route path="/usuarios" element={<Users />} />
        </Routes>
        <Cards/>
        <LastProducts/>
        <LastUsers/>
      </div>
    );
  }
}

export default App;