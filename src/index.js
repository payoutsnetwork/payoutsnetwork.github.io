/* react */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

/* css */
import './assets/sass/main.scss';

/* app */
import App from './App';
import * as serviceWorker from './serviceWorker';

/* redux / sagas */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import reducer from './redux/reducers';
import rootSaga from './redux/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route component={App} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
