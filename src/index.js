/*
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)*/

import { FIRST_NAMES } from './constants/FirstNames'
import { createStore, combineReducers } from 'redux'

const creatures = (creatures = [], action) => {
    switch (action.type) {
        case 'ADD_CREATURE':
            return [
                ...creatures,
                action.payload
            ];
        default:
            return creatures;
    }
};

const money = (money = 0, action) => {
    switch (action.type) {
        case 'ADD_MONEY':
            return money + 1;
        default:
            return money;
    }
};

const AppReducer = combineReducers({
    creatures,
    money
});

const store = createStore(AppReducer);


const render = () => {
    console.log(store.getState());
};

store.subscribe(render);
render();



document.getElementById('caver').addEventListener('click', () => {
    store.dispatch({
        type: 'ADD_CREATURE',
        payload: {
            id: Math.floor(Math.random() * 1000),
            text: FIRST_NAMES[Math.floor(Math.random()*FIRST_NAMES.length)]
        }
    });
});

document.getElementById('sun').addEventListener('click', () => {
    store.dispatch({
        type: 'ADD_MONEY'
    });
});