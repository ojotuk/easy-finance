import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom"
import Layout from "../../../components/templates"
import Loan from "./Loan"
import DeviceCategory from "./DeviceCategory";

export default function index() {
  return (
    <Layout>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Loan}/>
        <Route exact path="/device category" component={DeviceCategory}/>
        <Route component={Loan}/>
      </Switch>
    </HashRouter>
    </Layout>
  );
}
