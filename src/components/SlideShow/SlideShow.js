import { Slide } from 'react-slideshow-image';

import withImportImagesFolder from '../../hoc/withImportImagesFolder';

import classes from './SlideShow.module.scss';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.scss';

const slideShow = props => {
  const imageList = props.allImagesList.map((i, index) => (
    <div key={i} className="each-fade">
      <img src={i} alt={`slide-show-pic-${index + 1}`} />
    </div>
  ));

  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    pauseOnHover: false,
    Easing: 'ease-out',
    canSwipe: false,
    indicators: true,
    arrows: false,
  };

  return (
    <div className={classes.SlideShowContainer}>
      <Slide {...properties}>{imageList}</Slide>
    </div>
  );
};

export default withImportImagesFolder(
  slideShow,
  require.context('../../assets/slide-show/', false, /\.(png|jpe?g|svg)$/),
);
