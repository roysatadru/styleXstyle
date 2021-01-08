import React from 'react';

import Typography from '../Typography';
import HorizontalBar from '../UI/HorizontalBar';

import classes from './Post.module.scss';

const post = props => {
  return (
    <React.Fragment>
      <div className={classes.PostHeader}>
        <Typography variant="h3">{props.heading}</Typography>
        <HorizontalBar />
      </div>
      {props.children}
    </React.Fragment>
  );
};

export default post;
