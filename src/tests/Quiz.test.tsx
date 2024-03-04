import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from '../components/Quiz/Quiz';
import questions from '../utils/QuizData';

test('test', () => {
    expect(true).toBe(true);
});

test('renders Quiz component', () => {
  render(<Quiz />);
  expect(screen.getByText('Welcome to quiz game')).toBeInTheDocument();
});

test('displays quiz question', () => {
    render(<Quiz />);
    expect(screen.getByText('I exist everywhere and as soon as my name is said I am enough to exist. what am I?')).toBeInTheDocument();
    const options = screen.getAllByTestId('option');
    expect(options).toHaveLength(4);
});

test('allows user to select an answer', () => {
    render(<Quiz />);
    const optionA = screen.getByText('Silence');
    fireEvent.click(optionA);
    expect(optionA).toHaveClass('selected');
});

test('test submit button', () => {
    render(<Quiz />);
    fireEvent.click(screen.getByText('Silence'));
    fireEvent.click(screen.getByTestId('next'));
    fireEvent.click(screen.getByText('The letter e'));
    fireEvent.click(screen.getByTestId('next'));
    fireEvent.click(screen.getByText('Shadow'));
    fireEvent.click(screen.getByTestId('next'));
    fireEvent.click(screen.getByText('Keyboard'));
    fireEvent.click(screen.getByTestId('next'));
    fireEvent.click(screen.getByText('Alexander the Great'));
    fireEvent.click(screen.getByText('Submit'));
    const scoreTitleElement = screen.getByTestId('score');
    expect(scoreTitleElement).toHaveTextContent('Final Score: 100');
});