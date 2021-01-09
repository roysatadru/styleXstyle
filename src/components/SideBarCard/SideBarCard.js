import classes from './SideBarCard.module.scss';

const sideBarCard = ({ header, divider, children, darkTheme }) => {
  const classList = [classes.SideBarCard];
  let border = null;

  if (darkTheme) {
    classList.push(classes.darkTheme);
  }
  
  if (divider) {
    border = <div className={classes.SideBarCardBorder}></div>;
  }

  return (
    <div className={classList.join(' ')}>
      <div className={classes.SideBarCardPadding}>{header}</div>
      {border}
      {children}
    </div>
  );
};

export default sideBarCard;
