import axios from 'axios';
let page = 1;
let limit = 12;
const totalPages = Math.ceil(500 / limit);
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: page,
  per_page: limit,
});
const apiUrl = inputValue =>
  `https://pixabay.com/api/?key=31935843-a63100f17f055f7a8dc315776&q=${inputValue}&${searchParams}`;
//const parsedSearch = inputValue.trim();

export const fetchImages = async this.props.inputValue => {
  try {
    const response = await axios(apiUrl);
    const images = await response.data;
    console.log(images);
    return images;
  } catch (error) {
    if (error.response) {
      throw new Error('We find nothing that name!');
    }
  }
};
