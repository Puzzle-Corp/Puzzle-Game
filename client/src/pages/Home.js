import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import "../assets/css/game.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <img src="../AboutUs/ENdesktop.jpg" className="Img" />
                </Jumbotron>
                <div  style={{ fontFamily: "Indie Flower, cursive" }}>
                <h1 className="text-center">
                    We deliver the best free games on web or mobile to audiences around the world.
                </h1>
                <ul>
                    <li><h3>Advertise With Us</h3></li>
                    <li><h3> Play Our Games</h3></li>
                </ul>
                </div>
            </div>
        )
    }
}
export default Home;