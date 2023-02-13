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

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=31935843-a63100f17f055f7a8dc315776&';
export const fetchImagesWithQuery = async searchQuery => {
  const response = await axios.get(`q=${searchQuery}&${searchParams}`);
  console.log(response);
  return response.data;
};
export default { fetchImagesWithQuery };
