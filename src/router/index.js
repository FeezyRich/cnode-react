import React from "react";
import Index from "../page/home";
import New from "../page/new/new";
import Api from "../page/api/api";
import About from "../page/about/about";
import Login from "../page/login/login";
import Regist from "../page/regist/regist";
import Detile from "../page/detile/detile";
import User from "../page/user/user";
import SearchPass from "../page/search-pass/search-pass";
import Topics from "../page/topics/Topics";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";

export default class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Header} />
        <Switch>
          <Redirect exact from="/" to="/index"></Redirect>
          <Route exact path="/index" component={Index} />
          <Route path="/new" component={New} />
          <Route path="/api" component={Api} />
          <Route path="/about" component={About} />
          <Route path="/regist" component={Regist} />
          <Route path="/login" component={Login} />
          <Route path="/search-pass" component={SearchPass} />
          <Route exact path="/Topics/:tab/:userName" component={Topics} />
          <Route exact path="/detile/:id/:userName" component={Detile} />
          <Route exact path="/user/:userName" component={User} />
        </Switch>
        <ScrollTop />
        <Route component={Footer} />
      </BrowserRouter>
    );
  }
}
