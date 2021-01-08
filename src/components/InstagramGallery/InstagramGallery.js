import ImageContainer from '../ImageContainer/ImageContainer';
import withImportImagesFolder from '../../hoc/withImportImagesFolder';

import classes from './InstagramGallery.module.scss';

const instagramGallery = props => {
  const imgs = props.allImagesList.map((i, index) => (
    <ImageContainer
      key={i}
      src={i}
      alt={`instagram-photo-${index + 1}`}
      setheightorwidth='width'
    />
  ));
  return <div className={classes.InstagramGallery}>{imgs}</div>;
};

export default withImportImagesFolder(
  instagramGallery,
  require.context('../../assets/instagram-gallery-pics/', false, /\.(png|jpe?g|svg)$/),
);
