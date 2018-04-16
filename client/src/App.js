import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Puzzle from "./pages/Puzzle";
import Game from "./pages/Game";

const App = () => (
  <Router>
    <div className="container-fluid">
      <Nav />
      <Wrapper>
       {/* <Route exact path="/" component={Home} />*/}
        <Route exact path="/categories/:id" component={Puzzle} />
        <Route exact path="/Game" component={Game} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
