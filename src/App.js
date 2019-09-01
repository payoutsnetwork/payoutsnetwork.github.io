import React from 'react';
import {Route, Switch} from 'react-router-dom';
import indexRoutes from './routes';

function App() {
    return (
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={'route_' + prop.name + key}
            />
          );
        })}
      </Switch>
    );
}

export default App;
