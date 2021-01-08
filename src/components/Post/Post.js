import React from 'react';

import Typography from '../Typography';
import HorizontalBar from '../UI/HorizontalBar';

import classes from './Post.module.scss';

const post = ({ heading, children }) => {
  return (
    <React.Fragment>
      <div className={classes.PostHeader}>
        <Typography variant="h3">{heading}</Typography>
        <HorizontalBar />
      </div>
      {children}
    </React.Fragment>
  );
};

export default post;
