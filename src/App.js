import './App.scss';
import { history } from './_helper'
import { Router, Switch } from 'react-router';
import Layout from './layout';
import LandingPage from './pages/landing-page'


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Layout exact strict path='/' component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
