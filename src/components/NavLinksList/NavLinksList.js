import NavLink from '../NavLink/NavLink';
import { LINK_NOSUBLIST_LIST } from '../../shared/LinkLists';

import classes from './NavLinksList.module.scss';

const navLinksList = () => {
  const navLinksArr = [...LINK_NOSUBLIST_LIST];

  return (
    <ul className={classes.NavLinksList}>
      {navLinksArr.map(nl => (
        <li key={nl}>
          <NavLink>{nl}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default navLinksList;
