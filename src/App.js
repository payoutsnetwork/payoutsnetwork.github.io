import React from 'react';
import { Route, Switch } from 'react-router-dom';
import indexRoutes from './routes';

import SideBar from './components/Molecules/SideBar';
import AlertSystem from './components/Organisms/AlertSystem';

function App() {
  return (
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
                  <SideBar>{prop.render}</SideBar>
                </AlertSystem>
              );
            }}
            key={'route_' + prop.name + key}
          />
        );
      })}
    </Switch>
  );
}

export default App;
