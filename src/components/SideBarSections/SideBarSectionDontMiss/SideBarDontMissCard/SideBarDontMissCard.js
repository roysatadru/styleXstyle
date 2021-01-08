import classes from './SideBarDontMissCard.module.scss';

const sideBarDontMissCard = () => (
  <div className={classes.SideBarDontMissCard}>
    <ImageContainer key={item} src={item} alt={`shop products photo ${index + 1}`} />
    <a href={`/dont-miss-${index + 1}`} key={item}></a>
  </div>
);

export default sideBarDontMissCard;
