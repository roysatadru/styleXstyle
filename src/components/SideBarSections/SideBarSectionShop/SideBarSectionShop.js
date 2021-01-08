import SideBarCard from '../../SideBarCard/SideBarCard';
import SideBarCardHeader from '../../SideBarCard/SideBarCardHeader/SideBarCardHeader';
import Typography from '../../Typography';
import ImageContainer from '../../ImageContainer/ImageContainer';
import withImportImagesFolder from '../../../hoc/withImportImagesFolder';

import classes from './SideBarSectionShop.module.scss';

const sideBarSectionShop = props => {
  const imagesGrid = props.allImagesList.map((item, index) => (
    <a href={`/shop-product-${index + 1}`} key={item}>
      <ImageContainer
        key={item}
        src={item}
        alt={`shop products photo ${index + 1}`}
        setheightorwidth="width"
      />
    </a>
  ));

  return (
    <SideBarCard
      header={
        <SideBarCardHeader>
          <Typography style={{ fontStyle: 'italic' }}>Get them now</Typography>
          <Typography variant="h2">Shop</Typography>
        </SideBarCardHeader>
      }
      divider
    >
      <div className={classes.SideBarSectionShop}>{imagesGrid}</div>
    </SideBarCard>
  );
};

export default withImportImagesFolder(
  sideBarSectionShop,
  require.context('../../../assets/side-bar-shop-pics/', false, /\.(png|jpe?g|svg)$/),
);
