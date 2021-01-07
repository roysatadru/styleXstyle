import React from 'react';

import SlideShow from '../SlideShow/SlideShow';
import MainPostsArea from '../MainPostsArea/MainPostsArea';
import SideBarArea from '../SideBarArea/SideBarArea';
import Typography from '../Typography';
import InstagramGallery from '../InstagramGallery/InstagramGallery';

import classes from './IndexPage.module.scss';

const indexPage = () => {
  return (
    <React.Fragment>
      <div className={classes.PageSlideShow}>
        <SlideShow />
      </div>
      <MainPostsArea></MainPostsArea>
      <SideBarArea></SideBarArea>
      <div className={classes.PageInstagramSection}>
        <Typography variant='h4'>Instagram</Typography>
        <InstagramGallery />
      </div>
    </React.Fragment>
  );
};

export default indexPage;
