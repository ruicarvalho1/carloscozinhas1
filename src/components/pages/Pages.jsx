import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Roupeiros from "../roupeiro/Roupeiros";
import Contact from "../contact/Contact";
import Cozinhas from "../cozinha/Cozinhas";
import ScrollToTop from "../../scrollToTop";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/cozinhas" component={Cozinhas} />
          <Route exact path="/roupeiros" component={Roupeiros} />
          <Route exact path="/contacto" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
