// Form.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './index';
import useStringRandomizer from '../../hooks/useStringRandomizer';

// Mock the useStringRandomizer hook
jest.mock('../../hooks/useStringRandomizer');

describe('Form Component', () => {
  const mockGetSearchResult = jest.fn();
  const mockGenerateRandomString = jest.fn();

  beforeEach(() => {
    useStringRandomizer.mockReturnValue({
      generateRandomString: mockGenerateRandomString,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with given props', () => {
    render(
      <Form
        getSearchResult={mockGetSearchResult}
        disabled={false}
      />
    );

    const shuffleButton = screen.getAllByRole('button')[1];
    const inputElement = screen.getByPlaceholderText('Ask me something!');
    expect(shuffleButton).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('updates input value when typed into', () => {
    render(
      <Form
        getSearchResult={mockGetSearchResult}
        disabled={false}
      />
    );

    const inputElement = screen.getByPlaceholderText('Ask me something!');
    fireEvent.change(inputElement, { target: { value: 'new input' } });

    expect(inputElement).toHaveValue('new input');
  });


  test('disables shuffle button and input when disabled prop is true', () => {
    render(
      <Form
        getSearchResult={mockGetSearchResult}
        disabled={true}
      />
    );

    const shuffleButton = screen.getAllByRole('button')[1];
    const inputElement = screen.getByPlaceholderText('Ask me something!');

    expect(shuffleButton).toBeDisabled();
    expect(inputElement).toBeDisabled();
  });
});
