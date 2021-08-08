import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleSearchValue = (event) => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchValue.trim() === "") {
      toast.error("Enter image name, please");

      return;
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: " " });
  };

  render() {
    return (
      <header className="Searchbar" onSubmit={this.handleSubmit}>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleSearchValue}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
