import { FIRST_NAMES } from './constants/FirstNames'
import { createStore, combineReducers } from 'redux'

const initialState = {
    creatures: [],
    money: 10
};


const creatures = (creatures = [], action) => {

    if(action.type == 'ADD_CREATURE') {
        return [...creatures, action.payload]

    }

    return creatures;
};

const money = (money = 0, action) => {

    if (action.type == 'ADD_MONEY') {
        return money + 1;
    }

    return money;
};




const compositeReducer = combineReducers({
    creatures,
    money

});

/*
const compositeReducer = (currentAppState = initialState, action) => {
    return {
        creatures: creaturesReducer(currentAppState.creatures, action),
        money: moneyReducer(currentAppState.money, action)
    }
};*/

const store = createStore(compositeReducer, initialState);


setInterval(function () {
    console.log(store.getState());
}, 1000);










/*

const render = () => {
    console.log(store.getState());
};

store.subscribe(render);
render();
*/
















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