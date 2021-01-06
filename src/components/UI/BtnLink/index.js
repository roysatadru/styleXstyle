import classes from './BtnLink.module.scss';

const btnLink = props => (
  <a href={`/${props.children.replace(/[^a-zA-Z]/g, '')}`} className={classes.BtnLink}>
    {props.children}
  </a>
);

export default btnLink;
