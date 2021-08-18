import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app initial state', () => {
  render(<App />);
  const linkElement = screen.getByText(/simple calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('rendering the result', async () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(5))
  fireEvent.click(screen.getByTestId('+'))
  fireEvent.click(screen.getByTestId(7));
  fireEvent.click(screen.getByTestId('='))
  expect(screen.getByTestId('results').textContent).toBe("12")
  fireEvent.click(screen.getByTestId('*'))
  fireEvent.click(screen.getByTestId(0))
  fireEvent.click(screen.getByTestId('='))
  expect(screen.getByTestId('results').textContent).toBe("")
  fireEvent.click(screen.getByTestId('C'))
  expect(screen.getByTestId('results').textContent).toBe("0")
});

test('reset result pane', async () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("C"))
  expect(screen.getByTestId('results').textContent).toBe("0")
});

