import classes from './MoreLooks.module.scss';

const moreLooks = props => (
  <a href={props.link} className={classes.MoreLooks}>
    <span>More Looks</span>
  </a>
);

export default moreLooks;
