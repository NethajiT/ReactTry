import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Application from './Application'

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Application />, document.getElementById('root'));
ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
