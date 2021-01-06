import classes from './BtnLink.module.scss';

const btnLink = props => {
  const classList = [classes.BtnLink];

  if (props.size === 'small') {
    classList.push(classes.small);
  }

  return (
    <a href={`/${props.children.replace(/[^a-zA-Z]/g, '').toLowerCase()}`} className={classList.join(' ')}>
      {props.children}
    </a>
  );
};

export default btnLink;
