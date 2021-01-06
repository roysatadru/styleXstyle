import classes from './Search.module.scss';
import searchIcon from '../../../assets/svgs/search-icon.svg';

const search = () => (
  <div className={classes.SearchContainer}>
    <button className={classes.SearchButton}>
      <img src={searchIcon} alt="search" />
    </button>
    <input type="text" className={classes.SearchInput} placeholder='Search' />
  </div>
);

export default search;
