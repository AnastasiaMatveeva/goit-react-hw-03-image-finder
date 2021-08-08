import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./Components/ImageGallery";
import styles from "./styles.css";
class App extends Component {
  state = {
    searchValue: "",
  };
  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery searchValue={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
