import "./index.css"
import React from "react"
import { useState } from "react"
import IQtest_question1 from "../../assets/iqtest1-1-question.png"
import IQtest_answer1_a from "../../assets/iqtest1-1-answer-a.png"
import IQtest_answer1_b from "../../assets/iqtest1-1-answer-b.png"
import IQtest_answer1_c from "../../assets/iqtest1-1-answer-c.png"
import IQtest_answer1_d from "../../assets/iqtest1-1-answer-d.png"
import IQtest_answer1_e from "../../assets/iqtest1-1-answer-e.png"
import IQtest_question6 from "../../assets/iqtest1-6-question.png"
import IQtest_answer6_a from "../../assets/iqtest1-6-answer-a.png"
import IQtest_answer6_b from "../../assets/iqtest1-6-answer-b.png"
import IQtest_answer6_c from "../../assets/iqtest1-6-answer-c.png"
import IQtest_answer6_d from "../../assets/iqtest1-6-answer-d.png"

const FirstTest = () => {

    const questions = [
        {
            image: IQtest_question1,
            questionText: "Which piece below, when fitted nito the piece on the left, will form a perfect aquare?",
            answerOptions: [
                { image: IQtest_answer1_a, isCorrect: false },
                { image: IQtest_answer1_b, isCorrect: true },
                { image: IQtest_answer1_c, isCorrect: false },
                { image: IQtest_answer1_d, isCorrect: false },
                { image: IQtest_answer1_e, isCorrect: false },
            ],
        },
        {
            questionText: "Which word in brackets is most opposite to the word in capitals? PROSCRIBE",
            answerOptions: [
                { answerText: "allow", isCorrect: true },
                { answerText: "stifle", isCorrect: false },
                { answerText: "promote", isCorrect: false },
                { answerText: "verify", isCorrect: false },
                { answerText: "indict", isCorrect: false },
            ],
        },
        {
            questionText: "What number should replace the question mark? 0, 1, 2, 4, 6, 9, 12, 16, ?",
            answerOptions: [
                { answerText: 18, isCorrect: false},
                { answerText: 24, isCorrect: false},
                { answerText: 32, isCorrect: false},
                { answerText: 20, isCorrect: true},
                { answerText: 26, isCorrect: false},
                { answerText: 22, isCorrect: false},
                { answerText: 17, isCorrect: false},
                { answerText: 16, isCorrect: false},
            ]
        },
        {
            questionText: "Which number is the odd one out?",
            answerOptions: [
                { answerText: 9678, isCorrect: false},
                { answerText: 4572, isCorrect: false},
                { answerText: 5261, isCorrect: false},
                { answerText: 5133, isCorrect: false},
                { answerText: 3527, isCorrect: true},
                { answerText: 6895, isCorrect: false},
                { answerText: 7768, isCorrect: false},
            ]
        },
        {
            questionText: "Isotherm is to temperature as isobar is to:",
            answerOptions: [
                { answerText: "atmosphere", isCorrect: false},
                { answerText: "wind", isCorrect: false},
                { answerText: "pressure", isCorrect: false},
                { answerText: "latitude", isCorrect: false},
                { answerText: "current", isCorrect: true},
            ]
        },
        {
            image: IQtest_question6,
            questionText: "Which is the missing section?",
            answerOptions: [
                { image: IQtest_answer6_a, isCorrect: false},
                { image: IQtest_answer6_b, isCorrect: false},
                { image: IQtest_answer6_c, isCorrect: false},
                { image: IQtest_answer6_d, isCorrect: false},
            ]
        },
        
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const [iq, setIq] = useState(30);

    const handleAnswerButtonClick = (isCorrect) => {

        if(isCorrect===true) {
            if (score < questions.length - 24) {
                setScore(score + 1);
                setIq(iq + 4.37);
            } else {
                setScore(score + 1);
                setIq(iq + 2.92)
            }
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    let roundedIq = Math.round(iq);

    return (
        <div className="main">
            {showScore ? (
                <div className="score-section">Your result is <span className="rounded-score">{roundedIq}</span> IQ. {score}/{questions.length}</div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        
                            <img className="question-image" src={questions[currentQuestion].image} />
                            <p className="question-text">{questions[currentQuestion].questionText}</p>
                        
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <button key={index} onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>
                            {answerOption.image ? <img className="answers" src={answerOption.image} alt={`Option ${index + 1}`} /> : answerOption.answerText}
                        </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default FirstTest