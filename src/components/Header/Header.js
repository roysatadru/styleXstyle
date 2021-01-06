import React from 'react';

import Logo from '../UI/Logo';
import HorizontalBar from '../UI/HorizontalBar';

import classes from './Header.module.scss';

const header = () => (
  <React.Fragment>
    <HorizontalBar style={{ gridColumn: 'full-start / full-end' }} />
    <div className={classes.Header}>
      <Logo />
    </div>
    <HorizontalBar style={{ gridColumn: 'full-start / full-end' }} />
  </React.Fragment>
);

export default header;
