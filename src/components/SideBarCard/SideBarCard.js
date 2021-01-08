import classes from './SideBarCard.module.scss';

const sideBarCard = ({ header, divider, children }) => {
  let border = null;
  if (divider) {
    border = <div className={classes.SideBarCardBorder}></div>;
  }

  return (
    <div className={classes.SideBarCard}>
      <div className={classes.SideBarCardPadding}>{header}</div>
      {border}
      {children}
    </div>
  );
};

export default sideBarCard;
