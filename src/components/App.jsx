import React from 'react';
import { fetchImages } from './api/FetchImages.js';
import { Searchbar } from './searchbar/Searchbar.js';
export class App extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    IsLoading: false,
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.target.value });
  };
  handleRequest = async inputValue => {
    this.setState({ isLoading: true });
    const images = await fetchImages(inputValue);
    this.setState({ images, isLoading: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const { searchQuery } = this.state;
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
      </div>
    );
  }
}
