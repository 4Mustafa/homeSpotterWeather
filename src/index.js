import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import {Provider} from 'react-redux';
import axios from 'axios';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App/App';

const searchReducer = (state = [], action) => {
    console.log('in searchReducer');
    switch (action.type){
        case 'SEARCH_RESULTS':
            return action.payload
    default:
        return state
    }
}


function* rootSaga(){
    yield takeEvery('GET_LOCO', getLocoSaga);
}


function* getLocoSaga(action){
    console.log('in getLocoSaga', action.payload);
    try{
        const response = yield axios.get(`/api/search/${action.payload}`);
        yield put({type: 'SEARCH_RESULTS', payload: response.data})
    }
    catch(error){
        console.log('Error with Search GET', error);
    }
}




const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers ({ 
        searchReducer,
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('react-root'));
