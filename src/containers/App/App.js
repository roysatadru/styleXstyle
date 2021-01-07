import Layout from '../../components/Layout/Layout';
import IndexPage from '../../components/Pages/IndexPage';

import classes from './App.module.scss';

const App = () => (
  <Layout>
    <IndexPage />
    <div className={classes.App}>Hello World!</div>
  </Layout>
);

export default App;
