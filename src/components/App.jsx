import React from 'react';
import fetchImages from './api/FetchImages.js';
import { ImageGallery } from './ImageGallery/ImageGallery.js';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.js';
import { Searchbar } from './searchbar/Searchbar.js';
export class App extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    IsLoading: false,
    error: null,
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.target.value });
  };
  // handleRequest = async inputValue => {
  //   this.setState({ isLoading: true });
  //   const images = await fetchImages(inputValue);
  //   this.setState({ images, isLoading: false });
  // };
  handleSubmit = e => {
    e.preventDefault();
    //e.target.reset();
    const { searchQuery } = this.state;
  };
  async componentDidMount() {
    const { searchQuery } = this.state;
    this.setState({ isLoading: true });
    try {
      const images = fetchImages.fetchImagesWithQuery({ searchQuery });
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { searchQuery, images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {images.length > 0 ? (
            <ImageGalleryItem images={this.state.images} />
          ) : (
            <p>nic nie wyszukałeś jeszcze</p>
          )}
        </ImageGallery>
      </div>
    );
  }
}
