import classes from './Typography.module.scss';

const typography = props => {
  switch (props.variant) {
    case 'h2':
      return <h2 className={classes.H2}>{props.children}</h2>;
    case 'h3':
      return <h3 className={classes.H3}>{props.children}</h3>;
    case 'h4':
      return <h4 className={classes.H4}>{props.children}</h4>;
    case 'h5':
      return <h5 className={classes.H5}>{props.children}</h5>;
    default:
      return <span style={props.style} className={classes.BodyText}>{props.children}</span>;
  }
};

export default typography;
