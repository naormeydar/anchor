  export interface IOption {
    id: number,
    text: string,
  }

  export interface IQuestion {
    id: number;
    title: string;
    options: IOption[];
    correctAnswerIndex: number;
  }

  const questions: IQuestion[] =
    [
      {
        id: 1,
        title: "I exist everywhere and as soon as my name is said I am enough to exist. what am I?",
        options: [{id: 1, text: "Knowledge"}, {id: 2, text: "The Present"}, {id: 3, text: "A Thought"}, {id: 4, text: "Silence"}],
        correctAnswerIndex: 3,
      },
      {
        id: 2,
        title: "I am the beginning of everything, the end of everywhere. I am the beginning of eternity, the end of time and space. What am I?",
        options: [{id: 1, text: "Nothing"}, {id: 2, text:"Universe"}, {id: 3, text:"The letter e"}, {id: 4, text:"None of the above"}],
        correctAnswerIndex: 2,
      },
      {
        id: 3,
        title: "I am with you during the day but not at night. What am I?",
        options: [{id: 1, text: "Opportunity"}, {id: 2, text: "Umbrella"}, {id: 3, text:"Glasses"}, {id: 4, text:"Shadow"}],
        correctAnswerIndex: 3,
      },
      {
        id: 4,
        title: "I have keys but open no locks, I have space but no room, you can enter, but you can't go inside. What am I?",
        options: [{id: 1, text: "Library"}, {id: 2, text:"Keyboard"}, {id: 3, text:"Highway"}, {id: 4, text:"Smartphone"}],
        correctAnswerIndex: 1,
      },
      {
        id: 5,
        title: "I was born in Europe, died in Asia, and buried in Africa. How am I?",
        options: [{id: 1, text: "Alexander the Great"}, {id: 2, text: "Napoleon Bonaparte"}, {id: 3, text:"Julius Caesar"}, {id: 4, text:"Hannibal Barca"}],
        correctAnswerIndex: 0,
      }
    ];

  export default questions;