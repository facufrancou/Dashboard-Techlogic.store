import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import Sections from "./Sections";
import Collections from "./Collections";
import Brands from "./Brands";
import Users from "./Users";
import Login from "./Login"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar/>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    );
  }
}

export default App;
