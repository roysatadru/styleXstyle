import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import classes from './Layout.module.scss';

const layout = props => (
  <div className={classes.Layout}>
    <Header />
    <div className={classes.Main}>{props.children}</div>
    <Footer />
  </div>
);

export default layout;
