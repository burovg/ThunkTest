import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';


import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithmiddlewere = applyMiddleware(reduxThunk)(createStore);



ReactDOM.render(
    <Provider store={createStoreWithmiddlewere(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
