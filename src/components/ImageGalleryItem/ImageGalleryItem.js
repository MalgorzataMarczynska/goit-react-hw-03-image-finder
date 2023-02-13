import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL }) => {
    return (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem_image}
          src={webformatURL}
          alt={id}
        />
      </li>
    );
  });
ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};
