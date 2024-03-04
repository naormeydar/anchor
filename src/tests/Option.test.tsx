import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Option from '../components/Option/Option';

const mockOption = { id: 1, text: 'Test Option' };

test('renders Option component', () => {
  render(<Option option={mockOption} isSelected={false} onSelectOption={() => {}} />);
  const optionButton = screen.getByTestId('option');
  expect(optionButton).toHaveTextContent('Test Option');
});

test('test selecting option', () => {
  const mockOnSelectOption = jest.fn();
  render(<Option option={mockOption} isSelected={false} onSelectOption={mockOnSelectOption} />);
  const optionButton = screen.getByTestId('option');
  fireEvent.click(optionButton);
  expect(mockOnSelectOption).toHaveBeenCalledWith(1);
});