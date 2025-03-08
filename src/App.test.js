import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const headingElement = screen.getByTestId('header-title');
  expect(headingElement).toBeInTheDocument();
});