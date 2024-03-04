import React from 'react'
import './Score.css';

export interface IScoreProps {
    finalScore: number;
    onRestart: () => void;
}

const Score = ({finalScore, onRestart}: IScoreProps) => {
  return (
    <>
        <div data-testid='score' className='Score'>
            <h1>Final Score: {finalScore}</h1>
        </div>
        <button data-testid="replay" className='NavigationButton' onClick={onRestart}>Play Again</button>
    </>
  )
}

export default Score
