import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import phoneStoreApp from './store/reducers';
import Router from './pages/Router';
import { fetchPhones } from './store/actions/index';

const loggerMiddleware = createLogger();
const store = createStore(
  phoneStoreApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);


store.dispatch(fetchPhones());

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
