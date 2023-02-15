import axios from 'axios';
let page = 1;
let limit = 12;
//const totalPages = Math.ceil(500 / limit);
export const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: page,
  per_page: limit,
});
const baseUrl =
  'https://pixabay.com/api/?key=31935843-a63100f17f055f7a8dc315776&';
export const fetchImagesWithQuery = async searchQuery => {
  const response = await axios.get(
    `${baseUrl}q=${searchQuery}&${searchParams}`
  );
  console.log('obrazki:', response.data);
  return response.data.hits;
};
