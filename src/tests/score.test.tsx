import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Score from '../components/Score/Score';

test('renders Score component with final score', () => {
  render(<Score finalScore={60} onRestart={() => {}} />);
  const scoreTitleElement = screen.getByTestId('score');
  expect(scoreTitleElement).toHaveTextContent('Final Score: 60');
});

test('test restart button', () => {
  const mockOnRestart = jest.fn();
  render(<Score finalScore={100} onRestart={mockOnRestart} />);
  const restartButton = screen.getByTestId('replay');
  fireEvent.click(restartButton);
  expect(mockOnRestart).toHaveBeenCalled();
});