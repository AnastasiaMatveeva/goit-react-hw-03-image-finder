import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import imagesApi from "../../Services/ImagesApi";
import Button from "../Button";
import Modal from "../Modal/Modal";
import Loader from "../Loader";
import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: false,
    pageNum: 1,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchValue;
    const prevPage = prevState.pageNum;
    const { pageNum } = this.state;

    const searchQuery = this.props.searchValue;
    if (prevName !== searchQuery || prevPage !== pageNum) {
      this.getData();
    }
  }
  getData() {
    const { pageNum } = this.state;
    const searchValue = this.props.searchValue;

    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchValue, pageNum)
      .then((images) => {
        if (pageNum === 1) {
          this.setState({ images });
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...images],
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  loadingMore = (prevState) => {
    this.setState((prevState) => ({ pageNum: prevState.pageNum + 1 }));
  };

  toggleModal = (event) => {
    let largeImg;
    const { showModal } = this.state;

    if (!showModal) {
      largeImg = event.currentTarget.getAttribute("data-modal");
    }

    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImg,
    }));
  };

  modalClose = () => {
    this.setState((prevState) => ({ largeImageURL: !prevState.largeImageURL }));
  };

  render() {
    const { images, loading, showModal } = this.state;
    const { searchValue } = this.props.searchValue;
    return (
      <>
        {searchValue && <div>Enter ...</div>}
        {images.length > 0 && (
          <>
            <ul className="ImageGallery">
              {images.map(({ webformatURL, largeImageURL, id }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    onToggleModal={this.toggleModal}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                  />
                );
              })}
            </ul>
            {!loading && <Button loadingMore={this.loadingMore} />}
          </>
        )}
        {loading && <Loader />}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImg={this.state.largeImageURL}></Modal>
        )}
      </>
    );
  }
}
ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
