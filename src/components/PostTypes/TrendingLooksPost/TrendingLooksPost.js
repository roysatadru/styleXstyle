import Post from '../../Post/Post';
import ImageContainer from '../../ImageContainer/ImageContainer';
import MoreLooks from '../../UI/MoreLooks';

import classes from './TrendingLooksPost.module.scss';

const importAll = r => {
  return r.keys().map(r);
};
const images = importAll(
  require.context('../../../assets/posts-pic/trending-looks-pics', false, /\.(png|jpe?g|svg)$/),
);

const trendingLooksPost = () => {
  const imgs = images.map((i, index) => (
    <ImageContainer
      key={i.default}
      src={i.default}
      alt={`trending-looks-${index + 1}`}
      position="top"
      setheightorwidth={'width'}
    />
  ));

  return (
    <Post heading={'Trending Looks'.toUpperCase()}>
      <div className={classes.TrendingPostGallery}>{imgs}</div>
      <div>
        <MoreLooks link="/more-trending-looks" />
      </div>
    </Post>
  );
};

export default trendingLooksPost;
