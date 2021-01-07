import React from 'react';

import SlideShow from '../SlideShow/SlideShow';

import classes from './IndexPage.module.scss';

const indexPage = () => {
  return (
    <React.Fragment>
      <div className={classes.PageSlideShow}>
        <SlideShow />
      </div>
    </React.Fragment>
  );
};

export default indexPage;
