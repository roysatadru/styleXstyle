import { Slide } from 'react-slideshow-image';

import classes from './SlideShow.module.scss';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.scss';

const importAll = r => {
  return r.keys().map(r);
};
const images = importAll(require.context('../../assets/slide-show/', false, /\.(png|jpe?g|svg)$/));

const slideShow = () => {
  const imageList = images.map((i, index) => (
    <div key={i.default} className="each-fade">
      <img src={i.default} alt={`slide-show-pic-${index + 1}`} />
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

export default slideShow;
