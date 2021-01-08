import SizedBox from '../../UI/SizedBox';

import classes from './SideBarCardHeader.module.scss';

const sideBarCardHeader = ({ children }) => (
  <div className={classes.SideBarCardHeader}>
    <SizedBox height="2rem" width="100%" />
    {children}
    <SizedBox height="2rem" width="100%" />
  </div>
);

export default sideBarCardHeader;
