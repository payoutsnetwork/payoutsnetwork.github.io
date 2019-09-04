import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';


//silence warnings
console.warn = jest.fn();

configure({ adapter: new Adapter() });
export { shallow, mount, render };

const middlewares = []; // add your middlewares
export const mockStore = configureStore(middlewares);

export default Enzyme;
