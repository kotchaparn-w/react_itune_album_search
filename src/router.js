import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import App from './containers/App';
import AlbumContainer from './containers/AlbumContainer';
import Nomatch from './components/Nomatch';

export default ()=> (
    <Router history={history} >
        <Switch >
            <Route exact path="/" component={App} />
            <Route exact path="/:artist" component={AlbumContainer} />
            <Route path="*" component={Nomatch} />
        </Switch>
    </Router>
);
