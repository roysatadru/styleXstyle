import HorizontalBar from '../UI/HorizontalBar';
import FooterList from './FooterList';

import classes from './Footer.module.scss';

const footer = () => {
  const linkLists = {
    flaunt: [],
    read: ['fashion', 'beauty', 'lifestyle', 'ask sxs', 'parties & events', 'blogs'],
    watch: ['sXs Tv', 'interviews', 'c channel'],
    shop: [],
    subMap: {
      'style:weddings': ['sw events'],
      'charity auction': [],
    },
  };

  return (
    <div className={classes.Footer}>
      <HorizontalBar />
      <div className={classes.FooterLinkListContainers}>
        <FooterList />
      </div>
    </div>
  );
};

export default footer;
