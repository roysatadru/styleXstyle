import ImageContainer from '../../ImageContainer/ImageContainer';
import withImportImagesFolder from '../../../hoc/withImportImagesFolder';

import classes from './SideBarSectionOne.module.scss';

const sideBarSectionOne = props => (
  <div className={classes.SideBarSectionOne}>
    <div>
      <ImageContainer
        src={props.allImagesList[0]}
        alt="A Mannequin wearing a fashionable cloth"
        setheightorwidth="width"
      />
      <ImageContainer
        src={props.allImagesList[1]}
        alt="A Wardrobe of clothes"
        setheightorwidth="width"
      />
    </div>
    <ImageContainer
      src={props.allImagesList[2]}
      alt="A woman holding shopping bags"
      setheightorwidth="width"
    />
  </div>
);

export default withImportImagesFolder(
  sideBarSectionOne,
  require.context('../../../assets/side-bar-pics/', false, /\.(png|jpe?g|svg)$/),
);
