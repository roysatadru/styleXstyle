import classes from './Typography.module.scss';

const typography = props => {
  const classList = [];

  switch (props.variant) {
    case 'h2':
      return <h2 className={classes.H2}>{props.children}</h2>;
    case 'h3':
      return <h3 className={classes.H3}>{props.children}</h3>;
    case 'h4':
      classList.push(classes.H4);
      if (props.darkTheme) {
        classList.push(classes.darkTheme);
      }
      if (props.noLineHeight) {
        classList.push(classes.noLineHeight);
      }
      if (props.uppercase) {
        classList.push(classes.uppercase);
      }
      return <h4 className={classList.join(' ')}>{props.children}</h4>;
    case 'h5':
      return <h5 className={classes.H5}>{props.children}</h5>;
    default:
      classList.push(classes.BodyText);
      if (props.italic) {
        classList.push(classes.italic);
      }
      if (props.noLineHeight) {
        classList.push(classes.noLineHeight);
      }
      return (
        <span style={props.style} className={classList.join(' ')}>
          {props.children}
        </span>
      );
  }
};

export default typography;
