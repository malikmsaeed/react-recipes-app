import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              Search Recipes with{" "}
              <strong className="text-orange">Food2Fork</strong>
            </h1>
            <form className="mt-5">
              <label htmlFor="search" className="text-capitalize">
                Search recipes seperated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  placeholder="chicken,onion,carrot"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
