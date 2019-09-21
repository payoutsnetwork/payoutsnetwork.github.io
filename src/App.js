import React from 'react';
import indexRoutes from './routes';
import { HashRouter, Route, Switch } from 'react-router-dom';

import SideBar from './components/Molecules/SideBar';
import AlertSystem from './components/Organisms/AlertSystem';

/* redux / sagas */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import rootSaga from './redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route
                exact
                path={prop.path}
                render={() => {
                  //include sidebar on all pages
                  return (
                    <AlertSystem>
                      <SideBar links={prop.sidebarLinks || []}>
                        {prop.render}
                      </SideBar>
                    </AlertSystem>
                  );
                }}
                key={'route_' + prop.name + key}
              />
            );
          })}
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;

