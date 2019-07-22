import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShowsPage from '../ShowsPage/ShowsPage';
import GoldenBookPage from '../GoldenBookPage/GoldenBookPage';
import AboutPage from '../AboutPage/AboutPage';
import LegalMentionsPage from '../LegalMentionsPage/LegalMentionsPage';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/shows' component={ShowsPage} />
      <Route exact path='/golden-book' component={GoldenBookPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/legal-mentions' component={LegalMentionsPage} />
      <Route exact path='/home' component={ShowsPage} />
      <Route path='/' component={ShowsPage} />
    </Switch>
  );
}
