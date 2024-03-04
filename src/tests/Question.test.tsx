import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Question from '../components/Question/Question';

const mockQuestion = {
  id: 1,
  title: 'Test Question',
  options: [
    { id: 1, text: 'Option A' },
    { id: 2, text: 'Option B' },
  ],
  correctAnswerIndex: 0,
};

test('renders Question component', () => {
  render(<Question question={mockQuestion} selectedOption={null} onSelectOption={() => {}} />);
  expect(screen.getByText('Test Question')).toBeInTheDocument();
  expect(screen.getByText('Option A')).toBeInTheDocument();
  expect(screen.getByText('Option B')).toBeInTheDocument();
});

test('allows user to select an option', () => {
  const mockOnSelectOption = jest.fn();
  render(<Question question={mockQuestion} selectedOption={null} onSelectOption={mockOnSelectOption} />);
  const optionA = screen.getByText('Option A');
  fireEvent.click(optionA);
  expect(mockOnSelectOption).toHaveBeenCalledWith(1);
});