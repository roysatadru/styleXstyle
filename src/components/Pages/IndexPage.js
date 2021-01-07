import React from 'react';

import SlideShow from '../SlideShow/SlideShow';
import MainPostsArea from '../MainPostsArea/MainPostsArea';
import SideBarArea from '../SideBarArea/SideBarArea';

import classes from './IndexPage.module.scss';

const indexPage = () => {
  return (
    <React.Fragment>
      <div className={classes.PageSlideShow}>
        <SlideShow />
      </div>
      <MainPostsArea></MainPostsArea>
      <SideBarArea></SideBarArea>
    </React.Fragment>
  );
};

export default indexPage;
