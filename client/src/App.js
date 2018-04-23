import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Puzzle from "./pages/Puzzle";
import Game from "./pages/Game";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App = () => (
  <Router>
    <div className="container">
      <Nav />
      <div className="row">
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:id" component={Puzzle} />
          <Route exact path="/categories/:_id/:id" component={Puzzle} />
          <Route exact path="/games/:id" component={Puzzle} />
          {/* <Route exact path="/Game" component={Game} />
          <Route exact path="/Game3" component={Game3} /> */}
          <Route exact path="/gameAssets/:gameId" component={Game} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />

        </Wrapper>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
