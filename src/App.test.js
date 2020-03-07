import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Guest from './components/Guest';

it('renders without crashing', () => {
  shallow(<App />);
});


test('renders Guests', () => {
  const { getByText } = render(<App />);
  const guest = getByText(/Guests/i);
  expect(guest).toBeInTheDocument();
});

it('finds submit button', () => {
  	let wrapper = mount(<App />);
  	expect(wrapper.find('button').text()).toEqual('Send Guest');
});

it('shows input text', () => {
  	let wrapper = mount(<App />);
  	wrapper.find('input').simulate('change', {
		target: {value: 'foo'}
	});
	wrapper.find('button').simulate('click');
	expect(wrapper.containsMatchingElement(<p>My new guest is foo</p>)).toBeTruthy()
});


it('takes snapshot of state changes', () => {
	const component = renderer.create(
		<App />
	);	
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	//input and clicked
	let instance = component.root;

	let findInput = instance.findByType('input');
	findInput.props.onChange({ target: { value: 'bar' } });

	let findButton = instance.findByType('button');
	findButton.props.onClick();
	
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});