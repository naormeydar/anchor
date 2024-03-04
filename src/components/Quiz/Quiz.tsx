import React, {useState} from 'react'
import './Quiz.css';
import questions, { IQuestion } from '../../utils/QuizData';
import Question from '../Question/Question';
import Navigation from '../Navigation/Navigation';
import Score from '../Score/Score';

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const currentQuestion: IQuestion = questions[currentQuestionIndex];
  const finalScore: number = (score / questions.length) * 100;

  const onSelectOption = (optionId: number) => {
    const originAnswers = [...answers];
    const newAnswers = [...originAnswers];
    newAnswers[currentQuestionIndex] = optionId;
    setAnswers(newAnswers);
    setSelectedOption(optionId);
  }

  const navigateAction = (goNext: boolean) => {
    setSelectedOption(answers[goNext ? currentQuestionIndex+1 : currentQuestionIndex-1]);
    setCurrentQuestionIndex((prevIndex) => goNext ? prevIndex + 1 : prevIndex -1);
  }

  const onPrevious = () => {
      if (score === currentQuestionIndex) {
        setScore((prevScore) => prevScore - 1);
      }
      navigateAction(false);
  }

  const onNext = () => {
    if(selectedOption && selectedOption - 1 === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore((prevScore) => prevScore + 1);
    }
    navigateAction(true);
  }

  const onSubmit = () => {
    onNext();
    setShowScore(true);
    setAnswers(Array(questions.length).fill(null));
  }

  const onRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className="Quiz">
      <h1 className='QuizTitle'>Welcome to quiz game</h1>
      {!showScore ? (
        <>
          <h3>Question {currentQuestionIndex + 1} of: {questions.length}</h3>
          <Question
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelectOption={onSelectOption}
          />
          <Navigation
            isPreviousDisabled={currentQuestionIndex === 0}
            isNextDisabled={selectedOption === null}
            isSubmit={currentQuestionIndex === questions.length - 1}
            onPrevious={onPrevious}
            onNext={onNext}
            onSubmit={onSubmit}
          />
        </>
      ) : (
        <Score finalScore={finalScore} onRestart={onRestart} />
      )}
    </div>
  )
}

export default Quiz;
