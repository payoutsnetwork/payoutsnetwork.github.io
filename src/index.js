/* react */
import React from 'react';
import ReactDOM from 'react-dom';

/* css */
import './assets/sass/main.scss';

/* app */
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
