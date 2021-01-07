import Typography from '../Typography';
import HorizontalBar from '../UI/HorizontalBar';

import classes from './Post.module.scss';

const post = props => {
  return (
    <div className={classes.Post}>
      <div className={classes.PostHeader}>
        <Typography variant="h3">{props.heading}</Typography>
        <HorizontalBar />
      </div>
      {props.children}
    </div>
  );
};

export default post;
