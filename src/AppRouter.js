import React from "react";
import {
  HomePage,
  ProjectsPage,
  AboutPage,
  SolutionsPage,
  ContactPage,
} from "./Pages";
import { Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/projects" exact component={ProjectsPage}></Route>
      <Route path="/about" exact component={AboutPage}></Route>
      <Route path="/contact" exact component={ContactPage}></Route>
      <Route path="/solutions" exact component={SolutionsPage}></Route>
    </Switch>
  );
}

export default AppRouter;
