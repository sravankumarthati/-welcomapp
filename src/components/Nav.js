import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import Home from "./Home";
import News from "./News";
import About from "./About";

class Nav extends Component {
  render() {
    return (
      <div class="App">
        <Router>
          <ul>
            <li>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home
              </Link>
            </li>
            <li>
              <Link to={"/news"}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>News
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <FontAwesomeIcon></FontAwesomeIcon>About
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                <FontAwesomeIcon></FontAwesomeIcon>Conatact
              </Link>
            </li>
          </ul>
          <Switch>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Nav;
