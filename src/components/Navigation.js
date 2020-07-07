import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
    <div className="nav">
        <Link className="x" to="/">Home</Link> 
        <Link className="y" to="/about">About</Link>
    </div>
    );
}

export default Navigation;