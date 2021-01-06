import classes from './HorizontalBar.module.scss';

const horizontalBar = props => (
  <div className={classes.HorizontalBar} style={props.style && props.style}></div>
);

export default horizontalBar;