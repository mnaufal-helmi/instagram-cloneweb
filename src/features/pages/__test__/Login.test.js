import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Login from '../Login.js';

describe('Login component', () => {
  it('should render the login form by default', () => {
    render(<Login />);
    
    // Check if email input field exists
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();

    // Check if password input field exists
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // Check if login button exists
    expect(screen.getByText(/login/i)).toBeInTheDocument();

    // Check if "Welcome" text is not visible
    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });

  it('should show "Welcome" message on successful login', () => {
    render(<Login />);
    
    // Fill in the email and password fields
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'user@gmail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '123' },
    });

    // Click the login button
    fireEvent.click(screen.getByText(/login/i));

    // Check if "Welcome" message is displayed
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it('should show an error message on unsuccessful login', () => {
    render(<Login />);
    
    // Fill in the email and password fields with incorrect values
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'wrong_user@.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'wrong_password' },
    });

    // Click the login button
    fireEvent.click(screen.getByText(/login/i));

    // Check if "Welcome" message is not visible
    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });

  it('should show "Logout" button and hide the login form after successful login', () => {
    render(<Login />);
    
    // Fill in the email and password fields
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'user@gmail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '123' },
    });

    // Click the login button
    fireEvent.click(screen.getByText(/login/i));

    // Check if "Logout" button is displayed
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();

    // Check if email input field is not visible
    expect(screen.queryByPlaceholderText(/email/i)).not.toBeInTheDocument();

    // Check if password input field is not visible
    expect(screen.queryByPlaceholderText(/password/i)).not.toBeInTheDocument();
  });

  it('should show login form and hide "Logout" button after logout', () => {
    render(<Login />);
    
    // Fill in the email and password fields
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'user@gmail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '123' },
    });

    // Click the login button
    fireEvent.click(screen.getByText(/login/i));

    // Click the logout button
    fireEvent.click(screen.getByText(/Logout/i));

    // Check if email input field is visible
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();

    // Check if password input field is visible
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // Check if "Login" button is visible
    expect(screen.getByText(/login/i)).toBeInTheDocument();

    // Check if "Logout" button is not visible
    expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();
  });
});
