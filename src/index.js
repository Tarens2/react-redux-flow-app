import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css'
import './styles/main.css'
import registerServiceWorker from './registerServiceWorker';
import 'react-viewer/dist/index.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
