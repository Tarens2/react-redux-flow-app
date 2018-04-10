import React from 'react';
import ReactDOM from 'react-dom';
import 'react-viewer/dist/index.css';
import 'normalize.css';
import App from './App';
import './styles/main.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
