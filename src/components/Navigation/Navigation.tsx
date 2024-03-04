import React from 'react'
import './Navigation.css';

export interface INavigation {
    isPreviousDisabled: boolean;
    isNextDisabled: boolean;
    isSubmit: boolean;
    onPrevious: () => void;
    onNext: () => void;
    onSubmit: () => void;
}

const Navigation = ({isPreviousDisabled, isNextDisabled, isSubmit, onPrevious, onNext, onSubmit}: INavigation) => {
  return (
    <div className='Navigation'>
      <button data-testid="previous" className='NavigationButton' disabled={isPreviousDisabled} onClick={onPrevious}>Previous</button>
      <button data-testid="next" className='NavigationButton' disabled={isNextDisabled} onClick={isSubmit ? onSubmit : onNext}>{isSubmit ? 'Submit' : 'Next'}</button>
    </div>
  )
}

export default Navigation
