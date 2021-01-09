import SideBarCard from '../../SideBarCard/SideBarCard';
import SideBarCardHeader from '../../SideBarCard/SideBarCardHeader/SideBarCardHeader';
import Typography from '../../Typography';
import SideBarDontMissCard from './SideBarDontMissCard/SideBarDontMissCard';
import withImportImagesFolder from '../../../hoc/withImportImagesFolder';

const linkTexts = [
  "Style: Wedding's Presents 'A Garden City'...",
  'How to: Style Longer Bangs',
  'In Good Company Launches First',
  'Win Beauty Hampers By KLARITY Worth $1.5...',
  'Teddy Tang: A Face to Watch in 2017',
];

const sideBarSectionDontMiss = props => {
  const imagesGrid = props.allImagesList.map((item, index) => {
    const slug = item.split('.').slice(0, -2).join('').split('/').slice(-1).join('').slice(2);
    return (
      <SideBarDontMissCard
        key={index}
        linkText={linkTexts[index]}
        link={`/${slug}`}
        imgSource={item}
        imgAltText={slug}
      />
    );
  });
  return (
    <SideBarCard
      header={
        <SideBarCardHeader>
          <Typography variant="h2">Don&rsquo;t miss</Typography>
        </SideBarCardHeader>
      }
    >
      {imagesGrid}
    </SideBarCard>
  );
};

export default withImportImagesFolder(
  sideBarSectionDontMiss,
  require.context('../../../assets/side-bar-dont-miss-pics/', false, /\.(png|jpe?g|svg)$/),
);
