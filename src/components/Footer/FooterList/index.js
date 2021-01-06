import Typography from '../../Typography';

import classes from './FooterList.module.scss';

const footerList = props => {
  const listHeader = 'Dummy';

  return (
    <div className={classes.FooterList}>
      <Typography variant='h5'>{listHeader.toUpperCase()}</Typography>
      <ul className={classes.FooterLinkList}></ul>
    </div>
  );
};

export default footerList;
