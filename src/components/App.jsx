import React from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.js';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.js';
import { Searchbar } from './searchbar/Searchbar.js';
import { fetchImagesWithQuery } from './api/FetchImages.js';
import { FallingLines } from 'react-loader-spinner';

export class App extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    IsLoading: false,
    error: null,
  };
  input = React.createRef();

  handleRequest = async (searchQuery = 'sun') => {
    this.setState({ isLoading: true });
    try {
      const images = await fetchImagesWithQuery(searchQuery);
      console.log(images);
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('keywords:', this.input.current.value);
    //e.target.reset();
    const { searchQuery } = this.state;
    this.setState({ searchQuery: this.input.current.value });
    this.handleRequest(searchQuery);
  };

  async componentDidMount() {
    this.handleRequest();
  }
  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery &&
      this.state.searchQuery.length > 3
    ) {
      this.handleRequest(this.state.searchQuery);
    }
  }

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} input={this.input} />
        {error && <p>Sorry, something went really wrong: {error.message}</p>}
        {isLoading && (
          <FallingLines
            color="#3f51b5"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        )}
        {images.length > 0 && (
          <ImageGallery>
            <ImageGalleryItem images={this.state.images}></ImageGalleryItem>
          </ImageGallery>
        )}
      </div>
    );
  }
}
