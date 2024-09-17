import React, { Component } from "react";
import AcceptedScreen from "../privatePages/Welcome";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }  
`;

export class Dummycontainer extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <Route exact path="/" render={() => <Home />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/contact" render={() => <Contact />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/register" render={() => <Register />} />
                <Route path="/welcome" render={() => <AcceptedScreen />} />
            </div>
        );
    }
}

export default Dummycontainer;
