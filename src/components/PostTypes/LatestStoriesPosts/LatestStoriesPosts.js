import Post from '../../Post/Post';
import LatestStoriesSinglePost from './LatestStoriesSinglePost/LatestStoriesSinglePost';

import classes from './LatestStoriesPosts.module.scss';

const importAll = r => {
  return r.keys().map(r);
};
const images = importAll(
  require.context('../../../assets/posts-pic/latest-stories-pics/', false, /\.(png|jpe?g|svg)$/),
);

const postsData = [
  {
    date: '23 January 2017',
    tags: ['StyleWeddings'],
    heading: 'Auspicious Dates To Start Work In The New Lunar Year',
    bodyText:
      "Fengshui master Joey Yap reveals when's the best day for your animal zodiac to start work in the year of the Fire Rooster.",
    author: 'Style Weddings',
    image: images[0].default,
    imgAltText: 'A new lunar year',
    slug: '/',
  },
  {
    date: '21 January 2017',
    tags: ['StyleWeddings'],
    heading: 'Useful Tips to Walking Down the Aisle with Your Dog',
    bodyText: 'I woof you.',
    author: 'Chermaine Ng',
    image: images[1].default,
    imgAltText: 'A dog with a flower in its mouth',
    slug: '/',
  },
  {
    date: '21 January 2017',
    tags: ['StyleWeddings'],
    heading: '8 Hipster Wedding Venues in Singapore',
    bodyText: "You won't find any hotel function rooms here.",
    author: 'Chelsea Tan',
    image: images[2].default,
    imgAltText: 'A wedding party',
    slug: '/',
  },
];

const latestStoriesPosts = () => {
  return (
    <Post heading={'Latest Stories'.toUpperCase()}>
      <div className={classes.LatestStoriesPosts}>
        {postsData.map((pD, index) => (
          <LatestStoriesSinglePost {...pD} key={index + 1} />
        ))}
      </div>
    </Post>
  );
};

export default latestStoriesPosts;
