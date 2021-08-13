import React, { useState } from 'react';
import questions from './Questions/Questions'
import './Test.css'
import { Button } from '@material-ui/core';

export default function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='QuestionCard'>
            {showScore ? (
                <div>
                    <div className='QuestionScore'>
                        You scored {score} out of {questions.length}
                    </div>
                    <Button variant='outlined'>Retour</Button>
                </div>
            ) : (
                <>
                    <div className='questionSection'>
                        <div className='questionNum'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <img className="imageQuestion" src={questions[currentQuestion].image} />
                        <h2 style={{
                            color: '#f2f2f2',
                            fontSize: '1.1rem', fontFamily: "Century Gothic", fontWeight: "normal", marginBottom:"12px"
                        }}>{questions[currentQuestion].question}</h2>
                        <br />
                    </div>
                    <div className='answer'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <Button variant="outlined" style={{color:"#5bc0be",fontSize: '1rem', fontFamily: "Century Gothic", fontWeight: "normal"}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.option}</Button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}