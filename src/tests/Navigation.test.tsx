import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../components/Navigation/Navigation';

test('renders Navigation component', () => {
  render(<Navigation isPreviousDisabled={false} isNextDisabled={false} isSubmit={false} onPrevious={() => {}} onNext={() => {}} onSubmit={() => {}} />);
  expect(screen.getByTestId('previous')).toBeInTheDocument();
  expect(screen.getByTestId('next')).toBeInTheDocument();
});

test('test previous button', () => {
  const mockOnPrevious = jest.fn();
  render(<Navigation isPreviousDisabled={false} isNextDisabled={false} isSubmit={false} onPrevious={mockOnPrevious} onNext={() => {}} onSubmit={() => {}} />);
  const previousButton = screen.getByTestId('previous');
  fireEvent.click(previousButton);
  expect(mockOnPrevious).toHaveBeenCalled();
});

test('test next button', () => {
    const mockOnNext = jest.fn();
    render(<Navigation isPreviousDisabled={false} isNextDisabled={false} isSubmit={false} onPrevious={() => {}} onNext={mockOnNext} onSubmit={() => {}} />);
    const nextButton = screen.getByTestId('next');
    fireEvent.click(nextButton );
    expect(mockOnNext).toHaveBeenCalled();
  });

  