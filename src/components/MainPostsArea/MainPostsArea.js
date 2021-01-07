import classes from './MainPostsArea.module.scss';

const posts = props => <main className={classes.MainPostsArea}>{props.children}</main>;

export default posts;
