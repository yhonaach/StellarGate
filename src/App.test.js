// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StellarGate title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StellarGate/i);
    expect(titleElement).toBeInTheDocument();
});
