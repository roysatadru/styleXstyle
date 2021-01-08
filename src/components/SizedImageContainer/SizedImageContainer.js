import classes from './SizedImageContainer.module.scss';

const sizedImageContainer = props => {
  const classList = [classes.SizedImageContainer];

  if (props.includeborder) {
    classList.push(classes.SizedImageContainerBorder);
  }

  return <div className={classList.join(' ')}>{props.children}</div>;
};

export default sizedImageContainer;
