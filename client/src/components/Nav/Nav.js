import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css"
import { ListItem } from "../Dropdown";
import API from "../../utils/API"

class Nav extends Component {
  state = {
    rootCategories: [],
  };
  componentDidMount() {
    this.loadCategories();
  }
  loadCategories = () => {
    API.getCategories()
      .then(res => this.setState({ rootCategories: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    //  console.log(this.state.rootCategories);
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">
              <i className="fas fa-puzzle-piece"></i>
            </a>
          </div>

          <div className="navbar-collapse collapse menu">
            <ul className="nav navbar-nav">
              <li className="dropdown" >
                <a href="*" className={window.location.pathname === "*" ? "active" : ""}
                  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Puzzles <span className="caret"></span></a>
                <ul className="dropdown-menu" >
                  {this.state.rootCategories.map(category => (
                    <ListItem key={category._id}>
                      <a href={"/categories/" + category._id}>
                        <strong>
                          {category.name}
                        </strong>
                      </a>
                    </ListItem>
                  ))}
                </ul>
              </li>
              <li className={window.location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={window.location.pathname === "/about" ? "active" : ""}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={window.location.pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">Contact Us</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav;
