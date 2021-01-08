import classes from './MainPostsArea.module.scss';

const posts = props => (
  <main className={classes.MainPostsArea}>
    <div>{props.children}</div>
  </main>
);

export default posts;
