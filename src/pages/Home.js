import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <Header title="Amazing Recipes">
        <Link
          to="recipes"
          className="btn btn-secondary text-uppercase mt-3 btn-lg"
        >
          Search Recipes
        </Link>
      </Header>
    );
  }
}
