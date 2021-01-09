import ImageContainer from '../../../containers/ImageContainer/ImageContainer';
import withImportImagesFolder from '../../../hoc/withImportImagesFolder';

import classes from './SideBarSectionOne.module.scss';

const sideBarSectionOne = props => (
  <div className={classes.SideBarSectionOne}>
    <div>
      <ImageContainer
        src={props.allImagesList[0]}
        alt="A Mannequin wearing a fashionable cloth"
        setwidth
      />
      <ImageContainer
        src={props.allImagesList[1]}
        alt="A Wardrobe of clothes"
        setwidth
      />
    </div>
    <ImageContainer
      src={props.allImagesList[2]}
      alt="A woman holding shopping bags"
      setwidth
    />
  </div>
);

export default withImportImagesFolder(
  sideBarSectionOne,
  require.context('../../../assets/side-bar-pics/', false, /\.(png|jpe?g|svg)$/),
);
