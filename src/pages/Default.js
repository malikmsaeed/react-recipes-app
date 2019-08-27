import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-uppercase text-light">You are at wrong Place</h2>
        <Link to="/" className="btn btn-secondary text-uppercase mt-3 btn-lg">
          return Home
        </Link>
      </Header>
    );
  }
}
