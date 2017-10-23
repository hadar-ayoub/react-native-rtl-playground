import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import Module from './module'
import settings from './module/reducer'

const store = createStore(combineReducers({settings}), {});

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <Module/>
            </Provider>
        );
    }
}

