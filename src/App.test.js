import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});


test('renders Guests', () => {
  const { getByText } = render(<App />);
  const guest = getByText(/Guests/i);
  expect(guest).toBeInTheDocument();
});
