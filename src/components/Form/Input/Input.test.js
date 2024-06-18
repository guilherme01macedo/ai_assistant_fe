// Input.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './index';

describe('Input Component', () => {
  const mockGetSearchResult = jest.fn();
  const mockSetInputValue = jest.fn();
  const inputValue = 'test input';

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with given props', () => {
    render(
      <Input
        getSearchResult={mockGetSearchResult}
        disabled={false}
        setInputValue={mockSetInputValue}
        inputValue={inputValue}
      />
    );

    const inputElement = screen.getByPlaceholderText('Ask me something about me or my career!');
    const buttonElement = screen.getByRole('button');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(inputValue);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toBeDisabled();
  });

  test('changes input value when typed into', () => {
    render(
      <Input
        getSearchResult={mockGetSearchResult}
        disabled={false}
        setInputValue={mockSetInputValue}
        inputValue=""
      />
    );

    const inputElement = screen.getByPlaceholderText('Ask me something about me or my career!');
    fireEvent.change(inputElement, { target: { value: 'new input' } });

    expect(mockSetInputValue).toHaveBeenCalledWith('new input');
  });

  test('calls getSearchResult when Enter key is pressed', () => {
    render(
      <Input
        getSearchResult={mockGetSearchResult}
        disabled={false}
        setInputValue={mockSetInputValue}
        inputValue={inputValue}
      />
    );

    const inputElement = screen.getByPlaceholderText('Ask me something about me or my career!');
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(mockGetSearchResult).toHaveBeenCalledWith(inputValue.trim());
  });

  test('calls getSearchResult when button is clicked', () => {
    render(
      <Input
        getSearchResult={mockGetSearchResult}
        disabled={false}
        setInputValue={mockSetInputValue}
        inputValue={inputValue}
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockGetSearchResult).toHaveBeenCalledWith(inputValue.trim());
  });

  test('disables input and button when disabled prop is true', () => {
    render(
      <Input
        getSearchResult={mockGetSearchResult}
        disabled={true}
        setInputValue={mockSetInputValue}
        inputValue={inputValue}
      />
    );

    const inputElement = screen.getByPlaceholderText('Ask me something about me or my career!');
    const buttonElement = screen.getByRole('button');

    expect(inputElement).toBeDisabled();
    expect(buttonElement).toBeDisabled();
  });
});
