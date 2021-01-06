import logoImg from '../../../assets/logo/logo.png';

import classes from './Logo.module.scss';

const logo = props => (
  <a className={classes.Link} href='/'>
    <img src={logoImg} className={classes.Logo} alt='logo' />
  </a>
);

export default logo;