// ErrorContainer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorContainer from './index';

describe('ErrorContainer Component', () => {
  test('renders correctly with the error message', () => {
    render(<ErrorContainer />);

    const errorMessage = screen.getByText('Something went wrong searching, try again later.');

    expect(errorMessage).toBeInTheDocument();
  });
});
