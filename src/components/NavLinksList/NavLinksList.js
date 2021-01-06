import NavLink from '../NavLink/NavLink';

import classes from './NavLinksList.module.scss';

const navLinksList = () => {
  const navLinksArr = ['flaunt', 'read', 'watch', 'shop', 'style:weddings', 'charity auction'];

  return (
    <ul className={classes.NavLinksList}>
      {navLinksArr.map(nl => <li key={nl}><NavLink>{nl}</NavLink></li>)}
    </ul>
  );
};

export default navLinksList;