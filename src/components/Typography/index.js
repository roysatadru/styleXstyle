import classes from './Typography.module.scss';

const typography = props => {
  switch (props.variant) {
    case 'h2':
      return <h2 className={classes.H2}>{props.children}</h2>;
    case 'h3':
      return <h3 className={classes.H3}>{props.children}</h3>;
    case 'h4':
      return <h4 className={classes.H3}>{props.children}</h4>;
    case 'h5':
      return <h5 className={classes.H3}>{props.children}</h5>;
    default:
      return <div className={classes.BodyText}>{props.children}</div>;
  }
};

export default typography;
