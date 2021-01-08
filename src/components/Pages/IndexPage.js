import React from 'react';

import SlideShow from '../SlideShow/SlideShow';
import MainPostsArea from '../MainPostsArea/MainPostsArea';
import SideBarArea from '../SideBarArea/SideBarArea';
import Typography from '../Typography';
import InstagramGallery from '../InstagramGallery/InstagramGallery';
import TVEpisodePost from '../PostTypes/TVEpisodePost/TVEpisodePost';
import TrendingLooksPost from '../PostTypes/TrendingLooksPost/TrendingLooksPost';
import LatestStoriesPosts from '../PostTypes/LatestStoriesPosts/LatestStoriesPosts';

import classes from './IndexPage.module.scss';
import tvEpisodePost1 from '../../assets/posts-pic/TV-Episode-post-1.jpg';

const indexPage = () => {
  return (
    <React.Fragment>
      <div className={classes.PageSlideShow}>
        <SlideShow />
      </div>
      <MainPostsArea>
        <div className={classes.PageTVEpisodeSection}>
          <TVEpisodePost
            postHeading="styleXstyle TV Episode 46: Fragrance of Love"
            imageSrc={tvEpisodePost1}
            imageAltText="Fragrance of Love"
            postFooterText="Go Lunar New Year shopping with Sharon Au!"
          />
        </div>
        <div className={classes.PageTrendingLooksSection}>
          <TrendingLooksPost />
        </div>
        <div className={classes.PageLatestStoriesSection}>
          <LatestStoriesPosts />
        </div>
      </MainPostsArea>

      <SideBarArea>
        <div className={classes.PageSideBarSection1}>
          
        </div>
      </SideBarArea>

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
