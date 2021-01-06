import classes from './NavLink.module.scss';

const navLink = props => (
  <a href={`/${props.children.replace(/[^a-zA-Z]/g, '')}`} className={classes.NavLink}>
    {props.children}
  </a>
);

export default navLink;