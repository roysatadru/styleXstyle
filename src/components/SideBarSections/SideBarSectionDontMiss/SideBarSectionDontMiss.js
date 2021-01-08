import SideBarCard from '../../SideBarCard/SideBarCard';
import SideBarCardHeader from '../../SideBarCard/SideBarCardHeader/SideBarCardHeader';
import Typography from '../../Typography';
import ImageContainer from '../../ImageContainer/ImageContainer';
import withImportImagesFolder from '../../../hoc/withImportImagesFolder';

import classes from './SideBarSectionDontMiss.module.scss';

const sideBarSectionDontMiss = props => {
  const imagesGrid = props.allImagesList.map((item, index) => (
    <a href={`/shop-product-${index + 1}`} key={item}>
      <ImageContainer
        key={item}
        src={item}
        alt={`shop products photo ${index + 1}`}
      />
    </a>
  ));
  return (
    <SideBarCard
      header={
        <SideBarCardHeader>
          <Typography variant="h2">Don&rsquo;t miss</Typography>
        </SideBarCardHeader>
      }
    >
      <div className={classes.SideBarSectionDontMiss}>{imagesGrid}</div>
    </SideBarCard>
  );
};

export default withImportImagesFolder(
  sideBarSectionDontMiss,
  require.context('../../../assets/side-bar-dont-miss-pics/', false, /\.(png|jpe?g|svg)$/),
);