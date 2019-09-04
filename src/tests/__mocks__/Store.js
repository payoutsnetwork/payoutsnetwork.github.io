import configureStore from 'redux-mock-store';

const middlewares = []; // add your middlewares
export const mockStore = configureStore(middlewares);

