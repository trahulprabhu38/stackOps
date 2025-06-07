import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('DevOps Assignment')).toBeInTheDocument();
  });

  it('displays the backend URL from env', () => {
    process.env.NEXT_PUBLIC_API_URL = 'http://test-backend-url';
    render(<Home />);
    expect(screen.getByText(/http:\/\/test-backend-url/)).toBeInTheDocument();
  });
}); 