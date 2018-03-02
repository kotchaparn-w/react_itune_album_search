import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from './history';
import App from './App';
import MainComponent from './components/MainComponent';

export default props => (
    <Router history={history} >
        <App>
            <Route path="/" component={MainComponent} />
        </App>
    </Router>
);
