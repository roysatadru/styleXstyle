import React from 'react';

import Logo from '../UI/Logo';
import HorizontalBar from '../UI/HorizontalBar';
import Search from '../UI/Search';
import NavLinksList from '../NavLinksList/NavLinksList';

import classes from './Header.module.scss';

const header = () => (
  <React.Fragment>
    <div className={classes.HeaderBar}>
      <HorizontalBar />
    </div>
    <div className={classes.Header}>
      <div className={classes.HeaderLogo}>
        <Logo />
      </div>
      <div className={classes.HeaderSearchContainer}>
        <Search />
      </div>
      <div className={classes.HeaderLinkList}>
        <NavLinksList />
      </div>
    </div>
    <div className={classes.HeaderBar}>
      <HorizontalBar />
    </div>
  </React.Fragment>
);

export default header;
