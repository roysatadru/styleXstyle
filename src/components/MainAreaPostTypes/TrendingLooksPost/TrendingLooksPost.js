import Post from '../../Post/Post';
import ImageContainer from '../../../containers/ImageContainer/ImageContainer';
import MoreLooks from '../../UI/MoreLooks';
import withImportImagesFolder from '../../../hoc/withImportImagesFolder';

import classes from './TrendingLooksPost.module.scss';

const trendingLooksPost = props => {
  const imgs = props.allImagesList.map((i, index) => (
    <ImageContainer
      key={i}
      src={i}
      alt={`trending-looks-${index + 1}`}
      position="top"
      setwidth='true'
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

export default withImportImagesFolder(trendingLooksPost, require.context('../../../assets/posts-pic/trending-looks-pics/', false, /\.(png|jpe?g|svg)$/));
