import React, { Component } from 'react';
import Router from './pages/Router';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import phoneStoreApp from './store/reducers'
import {Provider} from 'react-redux'
import {fetchPhones} from "./store/actions/index";

const loggerMiddleware = createLogger()
let store = createStore(phoneStoreApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))


store.dispatch(fetchPhones())

class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
