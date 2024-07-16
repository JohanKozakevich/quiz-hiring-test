import React, { useState, useEffect } from 'react';
import './App.css';

interface QuizData {
  question: string;
  answers: string[];
}

const App: React.FC = () => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setQuizData(data));
  }, []);

  const handleAnswer = (responseIndex: number) => {
    if (quizData) {
      setAnswer(quizData.answers[responseIndex]);
    }
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>{quizData.question}</h1>
      <button onClick={() => handleAnswer(0)}>Yes</button>
      <button onClick={() => handleAnswer(1)}>No</button>
      {answer && <h2>{answer}</h2>}
    </div>
  );
};

export default App;
