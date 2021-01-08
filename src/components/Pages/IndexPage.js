import React from 'react';

import SlideShow from '../SlideShow/SlideShow';
import MainPostsArea from '../MainPostsArea/MainPostsArea';
import SideBarArea from '../SideBarArea/SideBarArea';
import Typography from '../Typography';
import InstagramGallery from '../InstagramGallery/InstagramGallery';
import Post from '../Post/Post';
import ImageContainer from '../ImageContainer/ImageContainer';
import tvEpisodePost1 from '../../assets/posts-pic/TV-Episode-post-1.jpg';
import SizedImageContainer from '../SizedImageContainer/SizedImageContainer';
import SizedBox from '../UI/SizedBox';

import classes from './IndexPage.module.scss';

const indexPage = () => {
  return (
    <React.Fragment>
      <div className={classes.PageSlideShow}>
        <SlideShow />
      </div>
      <MainPostsArea>
        <div className={classes.PageTVEpisodeSection}>
          <Post heading="styleXstyle TV Episode 46: Fragrance of Love">
            <SizedImageContainer>
              <ImageContainer src={tvEpisodePost1} alt="Fragrance of Love" />
            </SizedImageContainer>
            <SizedBox height="4rem" width="100%" />
            <Typography style={{ fontStyle: 'italic' }}>
              Go Lunar New Year shopping with Sharon Au!
            </Typography>
          </Post>
        </div>
      </MainPostsArea>
      <SideBarArea></SideBarArea>
      <div className={classes.PageInstagramSection}>
        <div className={classes.Instagram}>
          <Typography variant="h4">Instagram</Typography>
        </div>
        <InstagramGallery />
      </div>
    </React.Fragment>
  );
};

export default indexPage;
