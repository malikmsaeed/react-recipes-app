import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home";
import Recipes from "../src/pages/Recipes";
import SingleRecipe from "../src/pages/SingleRecipe";
import Default from "../src/pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={SingleRecipe} />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
