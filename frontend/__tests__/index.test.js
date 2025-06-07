// __tests__/index.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('DevOps Assignment')).toBeInTheDocument();
  });
  it('shows initial loading message', () => {
    render(<Home />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
