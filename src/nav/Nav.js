import React, { Component } from "react";
import { Link, uselocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default Nav() {
    const location = uselocation();
    const getNavPositionClass = () => {
        switch (localtion.pathname) {



            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
            case "/home":
                return "";




        }





    }



    render() {
        return (
            <div>
                <img src={astronautHelmet} />
                <img src={deadEye} />
                <img src={stack} />
                <img src={envelope} />

            </div>
        )
    }
}
