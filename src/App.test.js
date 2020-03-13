import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { act, create } from 'react-test-renderer';
//import { expect } from 'chai';
import Guest from './components/Guest';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  const findText = wrapper.find('h2');
  expect(findText.text()).toBe('Guests And Users');
});


test('renders Guests', () => {
  const { getByText } = render(<App />);
  const guest = getByText(/Guests And Users/i);
  expect(guest).toBeInTheDocument();
});

it('finds submit button', () => {
  	let wrapper = mount(<Guest />);
  	expect(wrapper.find('button').text()).toEqual('Send Guest');
});

it('shows input text', () => {
  	let wrapper = mount(<Guest />);
  	wrapper.find('input').simulate('change', {
		target: {value: 'foo'}
	});
	wrapper.find('button').simulate('click');
	expect(wrapper.containsMatchingElement(<p>My new guest is foo</p>)).toBeTruthy()
});


it('takes snapshot of state changes', () => {

	let component;

	act(() => {
		component = create(<Guest />);
	});	

	expect(component.toJSON()).toMatchSnapshot();

	//input and clicked
	let instance = component.root;

	let findInput = instance.findByType('input');
	act(() => {
		findInput.props.onChange({ target: { value: 'bar' } });
	});
	
	let findButton = instance.findByType('button');
	act(() => {
		findButton.props.onClick();
	});
	
	expect(component.toJSON()).toMatchSnapshot();
});