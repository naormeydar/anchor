import React from 'react'
import './Question.css';
import { IQuestion } from '../../utils/QuizData';
import Option from '../Option/Option';

export interface IQuestionProps {
    question: IQuestion;
    selectedOption: number | null;
    onSelectOption: (optionIndex: number) => void;
}

const Question = ({
    question,
    selectedOption,
    onSelectOption,
    }: IQuestionProps) => {
  return (
    <>
      <h2>{question.title}</h2>
      <div className='Options'>
        {question.options.map((option) => (
            <Option
                key={option.id}
                option={option}
                isSelected={selectedOption === option.id}
                onSelectOption={onSelectOption}
            />
        ))}
      </div>
    </>
  )
}

export default Question
