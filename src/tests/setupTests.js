import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//silence warnings
console.warn = jest.fn();

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
