// Header.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';

// Mock window.open to avoid opening a new tab during the test
global.open = jest.fn();

describe('Header Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with reducedLayout as false', () => {
    render(<Header reducedLayout={false} />);

    const headerImgElement = screen.getByAltText('Header profile pic');
    const linkedinImgElement = screen.getByAltText('Linkedin logo');
    const headerText = screen.getByText('MAIA');

    expect(headerImgElement).toBeInTheDocument();
    expect(linkedinImgElement).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });

  test('renders correctly with reducedLayout as true', () => {
    render(<Header reducedLayout={true} />);

    const headerImgElement = screen.getByAltText('Header profile pic');
    expect(headerImgElement).toBeInTheDocument();

    const linkedinImgElement = screen.queryByAltText('Linkedin logo');
    expect(linkedinImgElement).not.toBeInTheDocument();

    const headerText = screen.queryByText('MAIA');
    expect(headerText).not.toBeInTheDocument();
  });

  test('changes text on mouse enter and leaves', () => {
    render(<Header reducedLayout={false} />);

    const headerText = screen.getByText('MAIA');
    fireEvent.mouseEnter(headerText);
    expect(screen.getByText('MY AI ASSISTANT')).toBeInTheDocument();

    fireEvent.mouseLeave(headerText);
    expect(screen.getByText('MAIA')).toBeInTheDocument();
  });

  test('opens LinkedIn profile on image click in reducedLayout mode', () => {
    render(<Header reducedLayout={true} />);

    const headerImgElement = screen.getByAltText('Header profile pic');
    fireEvent.click(headerImgElement);

    expect(global.open).toHaveBeenCalledWith('https://www.linkedin.com/in/guilherme-macedo-/');
  });
});
