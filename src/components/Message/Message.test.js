// Message.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Message from './index';

const mockDataTemplate = (distance, answer = 'This is a sample answer') => ({
  data: {
    body: {
      distance: distance,
      data: [{ answer: answer }]
    }
  }
});

describe('Message Component', () => {
  test('renders "not found" message when distance is less than 0.35', () => {
    render(<Message data={mockDataTemplate(0.3)} />);

    const notFoundMessage = screen.getByText(/The distance index of the question is too small/);
    expect(notFoundMessage).toBeInTheDocument();

    const emailLink = screen.getByText(/guilherme01macedo@gmail.com/);
    const linkedInLink = screen.getByText(/LinkedIn!/);

    expect(emailLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/guilherme-macedo-/');
  });

  test('renders medium confidence message when distance is between 0.35 and 0.60', () => {
    render(<Message data={mockDataTemplate(0.5)} />);

    const answerMessage = screen.getByText('This is a sample answer');
    expect(answerMessage).toBeInTheDocument();

    const mediumConfidenceMessage = screen.getByText(/The distance index of the question is considered medium/);
    expect(mediumConfidenceMessage).toBeInTheDocument();

    const emailLink = screen.getByText(/guilherme01macedo@gmail.com/);
    const linkedInLink = screen.getByText(/LinkedIn!/);

    expect(emailLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/guilherme-macedo-/');
  });

  test('renders answer message when distance is greater than or equal to 0.60', () => {
    render(<Message data={mockDataTemplate(0.7)} />);

    const answerMessage = screen.getByText('This is a sample answer');
    expect(answerMessage).toBeInTheDocument();

    const notFoundMessage = screen.queryByText(/The distance index of the question is considered medium/);
    expect(notFoundMessage).not.toBeInTheDocument();
  });
});
