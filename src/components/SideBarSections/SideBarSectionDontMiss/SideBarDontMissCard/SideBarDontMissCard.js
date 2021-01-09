import Typography from '../../../Typography';
import ImageContainer from '../../../../containers/ImageContainer/ImageContainer';

import classes from './SideBarDontMissCard.module.scss';

const sideBarDontMissCard = ({ link, linkText, imgSource, imgAltText }) => (
  <div className={classes.SideBarDontMissCard}>
    <ImageContainer src={imgSource} alt={imgAltText} />
    <a href={link}>
      <Typography noLineHeight>{linkText}</Typography>
      <Typography noLineHeight>&gt;</Typography>
      <span className={classes.LinkEffect}></span>
    </a>
  </div>
);

export default sideBarDontMissCard;
