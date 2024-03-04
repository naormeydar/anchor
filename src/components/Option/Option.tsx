import React from 'react'
import { IOption } from '../../utils/QuizData';
import './Option.css';

export interface IOptionProps {
    option: IOption;
    isSelected: boolean;
    onSelectOption: (optionId: number) => void;
}

const Option = ({option, isSelected, onSelectOption}: IOptionProps) => {
  return (
    <>
        <button data-testid='option' className={`option ${isSelected && 'selected'}`} onClick={() => onSelectOption(option.id)}>
            {option.text}
        </button>
    </>
  )
}

export default Option
