import ImageContainer from '../ImageContainer/ImageContainer';

import classes from './InstagramGallery.module.scss';

const importAll = r => {
  return r.keys().map(r);
};
const images = importAll(
  require.context('../../assets/instagram-gallery-pics/', false, /\.(png|jpe?g|svg)$/),
);

const instagramGallery = () => {
  console.log(images);
  const imgs = images.map((i, index) => (
    <ImageContainer
      key={i.default}
      src={i.default}
      alt={`instagram-photo-${index + 1}`}
      setheightorwidth={'width'}
    />
  ));
  return <div className={classes.InstagramGallery}>{imgs}</div>;
};

export default instagramGallery;
