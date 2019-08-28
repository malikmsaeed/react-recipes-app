import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Recipe extends Component {
  render() {
    const {
      title,
      image_url,
      source_url,
      recipe_id,
      publisher
    } = this.props.recipe;
    return (
      <div className="col-10 col-md-6 col-lg-4 mx-auto my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            alt="recipe"
            className="card-img-top"
            style={{ height: "14rem" }}
          />
          <div className="card-body text-capitalize">
            <h5>{title}</h5>
            <h6 className="text-warning text-slanted">
              Provided by {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <Link
              to={`/recipes/${recipe_id}`}
              className="btn btn-primary text-capitalize"
            >
              details
            </Link>
            <a
              href={source_url}
              target="_blank"
              rel="noopner noreferrer"
              className="btn btn-success mx-2 text-capitalize"
            >
              Recipe Url
            </a>
          </div>
        </div>
      </div>
    );
  }
}
