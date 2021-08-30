import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('App component should render', () => {
  render(<App />);
});
