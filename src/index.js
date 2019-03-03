import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store= configureStore();
render(
     
    <Provider store={store}>        //the Provider component supplies the store to all components under the App component
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);