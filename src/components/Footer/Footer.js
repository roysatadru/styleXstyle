import HorizontalBar from '../UI/HorizontalBar';
import FooterList from './FooterList';
import { LINK_LISTS } from '../../shared/LinkLists';

import classes from './Footer.module.scss';

const footer = () => {
  const linkLists = { ...LINK_LISTS };

  const footerLists = [];

  for (const header in linkLists) {
    footerLists.push(
      <FooterList
        key={header}
        heading={header}
        listOrMap={linkLists[header]}
      />,
    );
  }

  return (
    <div className={classes.Footer}>
      <HorizontalBar />
      <div className={classes.FooterLinkListContainers}>{footerLists}</div>
    </div>
  );
};

export default footer;
