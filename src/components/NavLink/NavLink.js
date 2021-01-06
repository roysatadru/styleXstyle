import classes from './NavLink.module.scss';

const navLink = props => (
  <a href={`/${props.children}`} className={classes.NavLink}>
    {props.children}
  </a>
);

export default navLink;