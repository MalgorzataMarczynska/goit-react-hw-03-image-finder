import css from './Searchbar.module.css';
// import PropTypes from 'prop-types';
export const Searchbar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchForm_Button}>
        <span className={css.SearchForm_Button_Label}>Search</span>
      </button>

      <input
        className={css.SearchForm_Input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
