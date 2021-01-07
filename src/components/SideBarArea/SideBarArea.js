import classes from './SideBarArea.module.scss';

const sideBarArea = props => <aside className={classes.SideBarArea}><div>{props.children}</div></aside>;

export default sideBarArea;

