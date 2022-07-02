import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import HomePage from "./HomePage";
import FileUpload from "./components/FileUpload/FileUpload";

test('renders Homepage title', () => {
    render(<HomePage />);
    const titleElement = screen.getByText(/Dashboard of Recent Transactions/);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders FileUploads title', () => {
    render(<FileUpload />);
    const titleElement = screen.getByText(/Please uoload Doctor Prescription/);
    expect(titleElement).toBeInTheDocument();
  }); 