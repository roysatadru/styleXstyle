import Post from '../../Post/Post';
import LatestStoriesSinglePost from './LatestStoriesSinglePost/LatestStoriesSinglePost';
import withImportImagesFolder from '../../../hoc/withImportImagesFolder';

import classes from './LatestStoriesPosts.module.scss';

const postsData = [
  {
    date: '23 January 2017',
    tags: ['StyleWeddings'],
    heading: 'Auspicious Dates To Start Work In The New Lunar Year',
    bodyText:
      "Fengshui master Joey Yap reveals when's the best day for your animal zodiac to start work in the year of the Fire Rooster.",
    author: 'Style Weddings',
    imgAltText: 'A new lunar year',
    slug: '/',
  },
  {
    date: '21 January 2017',
    tags: ['StyleWeddings'],
    heading: 'Useful Tips to Walking Down the Aisle with Your Dog',
    bodyText: 'I woof you.',
    author: 'Chermaine Ng',
    imgAltText: 'A dog with a flower in its mouth',
    slug: '/',
  },
  {
    date: '21 January 2017',
    tags: ['StyleWeddings'],
    heading: '8 Hipster Wedding Venues in Singapore',
    bodyText: "You won't find any hotel function rooms here.",
    author: 'Chelsea Tan',
    imgAltText: 'A wedding party',
    slug: '/',
  },
];

const latestStoriesPosts = props => {
  return (
    <Post heading={'Latest Stories'.toUpperCase()}>
      <div className={classes.LatestStoriesPosts}>
        {props.allImagesList.map((i, index) => (
          <LatestStoriesSinglePost {...postsData[index]} image={i} key={index} />
        ))}
      </div>
    </Post>
  );
};

export default withImportImagesFolder(
  latestStoriesPosts,
  require.context('../../../assets/posts-pic/latest-stories-pics/', false, /\.(png|jpe?g|svg)$/),
);
