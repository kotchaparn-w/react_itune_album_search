import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'semantic-ui/dist/semantic.min.css';
import './styles/index.css';

import Router from './router';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
,document.getElementById('root')
);
