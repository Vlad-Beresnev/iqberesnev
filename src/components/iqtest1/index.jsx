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
import IQtest_answer7_a from "../../assets/iqtest1-7-answer-a.png"
import IQtest_answer7_b from "../../assets/iqtest1-7-answer-b.png"
import IQtest_answer7_c from "../../assets/iqtest1-7-answer-c.png"
import IQtest_answer7_d from "../../assets/iqtest1-7-answer-d.png"
import IQtest_answer7_e from "../../assets/iqtest1-7-answer-e.png"
import IQtest_answer9_a from "../../assets/iqtest1-9-answer-a.png"
import IQtest_answer9_b from "../../assets/iqtest1-9-answer-b.png"
import IQtest_answer9_c from "../../assets/iqtest1-9-answer-c.png"
import IQtest_answer9_d from "../../assets/iqtest1-9-answer-d.png"
import IQtest_answer9_e from "../../assets/iqtest1-9-answer-e.png"
import IQtest_question12 from "../../assets/iqtest1-12-question.png"
import IQtest_answer12_a from "../../assets/iqtest1-12-answer-a.png"
import IQtest_answer12_b from "../../assets/iqtest1-12-answer-b.png"
import IQtest_answer12_c from "../../assets/iqtest1-12-answer-c.png"
import IQtest_answer12_d from "../../assets/iqtest1-12-answer-d.png"
import IQtest_answer12_e from "../../assets/iqtest1-12-answer-e.png"
import IQtest_question14 from "../../assets/iqtest1-14-question.png"
import IQtest_question15 from "../../assets/iqtest1-15-question.png"
import IQtest_question16 from "../../assets/iqtest1-16-question.png"
import IQtest_answer16_a from "../../assets/iqtest1-16-answer-a.png"
import IQtest_answer16_b from "../../assets/iqtest1-16-answer-b.png"
import IQtest_answer16_c from "../../assets/iqtest1-16-answer-c.png"
import IQtest_answer16_d from "../../assets/iqtest1-16-answer-d.png"
import IQtest_answer16_e from "../../assets/iqtest1-16-answer-e.png"
import IQtest_answer16_f from "../../assets/iqtest1-16-answer-f.png"
import IQtest_question17 from "../../assets/iqtest1-17-question.png"
import IQtest_question23 from "../../assets/iqtest1-23-question.png"
import IQtest_answer23_a from "../../assets/iqtest1-23-answer-a.png"
import IQtest_answer23_b from "../../assets/iqtest1-23-answer-b.png"
import IQtest_answer23_c from "../../assets/iqtest1-23-answer-c.png"
import IQtest_question25 from "../../assets/iqtest1-25-question.png"
import IQtest_answer25_a from "../../assets/iqtest1-25-answer-a.png"
import IQtest_answer25_b from "../../assets/iqtest1-25-answer-b.png"
import IQtest_answer25_c from "../../assets/iqtest1-25-answer-c.png"
import IQtest_answer25_d from "../../assets/iqtest1-25-answer-d.png"
import IQtest_answer25_e from "../../assets/iqtest1-25-answer-e.png"
import IQtest_question26 from "../../assets/iqtest1-26-question.png"
import IQtest_question27 from "../../assets/iqtest1-27-question.png"
import IQtest_question28 from "../../assets/iqtest1-28-question.png"
import IQtest_answer28_a from "../../assets/iqtest1-28-answer-a.png"
import IQtest_answer28_b from "../../assets/iqtest1-28-answer-b.png"
import IQtest_answer28_c from "../../assets/iqtest1-28-answer-c.png"
import IQtest_answer28_d from "../../assets/iqtest1-28-answer-d.png"




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
        {
            questionText: "Which is the odd one out?",
            answerOptions: [
                { image: IQtest_answer7_a, isCorrect: false},
                { image: IQtest_answer7_b, isCorrect: false},
                { image: IQtest_answer7_c, isCorrect: false},
                { image: IQtest_answer7_d, isCorrect: false},
                { image: IQtest_answer7_e, isCorrect: false},
            ]
        },
        {
            questionText: "Identify two words (one from each set of brackets) that have a connection (analogy) with the words in capitals and relate to them in the same way.",
            questionText2: "GRAM (energy, weight, scales)",
            questionText3: "KNOT (water, rope, speed)",
            answerOptions: [
                { answerText: "Energy, Water", isCorrect: false},
                { answerText: "Energy, Rope", isCorrect: false},
                { answerText: "Energy, Speed", isCorrect: false},
                { answerText: "Weight, Water", isCorrect: false},
                { answerText: "Weight, Rope", isCorrect: false},
                { answerText: "Weight, Speed", isCorrect: false},
                { answerText: "Scales, Water", isCorrect: false},
                { answerText: "Scales, Rope", isCorrect: false},
                { answerText: "Scales, Speed", isCorrect: false},
            ]
        },
        {
            questionText: "Which is the odd one out?",
            answerOptions: [
                { image: IQtest_answer9_a, isCorrect: false},
                { image: IQtest_answer9_b, isCorrect: false},
                { image: IQtest_answer9_c, isCorrect: false},
                { image: IQtest_answer9_d, isCorrect: false},
                { image: IQtest_answer9_e, isCorrect: false},
            ]
        },
        {
            questionText: "How many minutes is it before 12 noon, if 48 minutes ago it was twice as many minutes past 9 am?",
            answerOptions: [
                { answerText: 23, isCorrect: false},
                { answerText: 54, isCorrect: false},
                { answerText: 125, isCorrect: false},
                { answerText: 102, isCorrect: false},
                { answerText: 11, isCorrect: false},
            ]
        },
        {
            questionText: "Which is the odd one out? heptagon, triangle, hexagon, cube, pentagon",
            answerOptions: [
                { answerText: "heptagon", isCorrect: false},
                { answerText: "triangle", isCorrect: false},
                { answerText: "hexagon", isCorrect: false},
                { answerText: "cube", isCorrect: false},
                { answerText: "pentagon", isCorrect: false},
            ]
        },
        {
            image: IQtest_question12,
            questionText: "Which is the missing tile?",
            answerOptions: [
                { image: IQtest_answer12_a, isCorrect: false},
                { image: IQtest_answer12_b, isCorrect: false},
                { image: IQtest_answer12_c, isCorrect: false},
                { image: IQtest_answer12_d, isCorrect: false},
                { image: IQtest_answer12_e, isCorrect: false},
            ]
        },
        {
            questionText: "Which word in brackets is closest in meaning to the word in capitals? BRUNT",
            answerOptions: [
                { answerText: "dull", isCorrect: false},
                { answerText: "edifice", isCorrect: false},
                { answerText: "impact", isCorrect: false},
                { answerText: "tawny", isCorrect: false},
                { answerText: "nonsense", isCorrect: false},
            ]
        },
        {
            image: IQtest_question14, 
            questionText: "What number should replace the question mark?",
            answerOptions: [
                { answerText: 3, isCorrect: false},
                { answerText: 5, isCorrect: false},
                { answerText: 7, isCorrect: false},
                { answerText: 6, isCorrect: false},
                { answerText: 2, isCorrect: false},
            ]
        },
        {
            image: IQtest_question15, 
            questionText: "How many lines appear below?",
            answerOptions: [
                { answerText: 3, isCorrect: false},
                { answerText: 5, isCorrect: false},
                { answerText: 7, isCorrect: false},
                { answerText: 6, isCorrect: false},
                { answerText: 2, isCorrect: false},
            ]
        },
        {
            image: IQtest_question16, 
            questionText: "Which is the missing tile?",
            answerOptions: [
                { image: IQtest_answer16_a, isCorrect: false},
                { image: IQtest_answer16_b, isCorrect: false},
                { image: IQtest_answer16_c, isCorrect: false},
                { image: IQtest_answer16_d, isCorrect: false},
                { image: IQtest_answer16_e, isCorrect: false},
            ]
        },
        {
            image: IQtest_question17, 
            questionText: "What number should replace the question mark?",
            answerOptions: [
                { answerText: 5, isCorrect: false},
                { answerText: 4, isCorrect: false},
                { answerText: 6, isCorrect: false},
                { answerText: 1, isCorrect: false},
                { answerText: 3, isCorrect: false},
            ]
        },
        {
            questionText: (
                <>
                    What two numbers should replace the question marks?<br></br> 10, 30, 32, 96, 98, 294, 296, ?, ?
                </>
            ),
            answerOptions: [
                { answerText: 5, isCorrect: false},
                { answerText: 4, isCorrect: false},
                { answerText: 6, isCorrect: false},
                { answerText: 1, isCorrect: false},
                { answerText: 3, isCorrect: false},
            ]
        },
        {
            questionText: (
                <>
                    able, rot, son, king<br></br>Which word below shares a common feature with all the words above?
                </>
            ),
            answerOptions: [
                { answerText: "line", isCorrect: false},
                { answerText: "sit", isCorrect: false},
                { answerText: "take", isCorrect: false},
                { answerText: "hope", isCorrect: false},
                { answerText: "night", isCorrect: false},
            ]
        },
        {
            questionText: (
                <>
                    Identify two words (one from each set of brackets) that have a connection
(analogy) with the words in capitals and relate to them in the same way.
<br></br>SEA (wet, swimmer, ship)
<br></br>SNOW (mountain, ice, skier)
                </>
            ),
            answerOptions: [
                { answerText: "Wet, Mountain", isCorrect: false},
                { answerText: "Wet, Ice", isCorrect: false},
                { answerText: "Wet, Skier", isCorrect: false},
                { answerText: "Swimmer, Mountain", isCorrect: false},
                { answerText: "Swimmer, Ice", isCorrect: false},
                { answerText: "Swimmer, Skier", isCorrect: false},
                { answerText: "Ship, Mountain", isCorrect: false},
                { answerText: "Ship, Ice", isCorrect: false},
                { answerText: "Ship, Skier", isCorrect: false},
            ]
        },
        {
            questionText: (
                <>
                    Alf has four times as many as Jim, and Jim has three times as many as Sid.
Altogether they have 192. How many has each?
                </>
            ),
            answerOptions: [
                { answerText: 5, isCorrect: false},
                { answerText: 132, isCorrect: false},
                { answerText: 66, isCorrect: false},
                { answerText: 45, isCorrect: false},
                { answerText: 20, isCorrect: false},
                { answerText: 54, isCorrect: false},
                { answerText: 225, isCorrect: false},
                { answerText: 192, isCorrect: false},
            ]
        },
        {
            questionText: (
                <>
                    A man has 53 socks in his drawer: 21 identical blue, 15 identical black and 17
identical red. The lights are fused and he is completely in the dark. How many
socks must he take out to make 100 per cent certain he has a pair of black socks?
                </>
            ),
            answerOptions: [
                { answerText: 5, isCorrect: false},
                { answerText: 132, isCorrect: false},
                { answerText: 66, isCorrect: false},
                { answerText: 45, isCorrect: false},
                { answerText: 20, isCorrect: false},
                { answerText: 54, isCorrect: false},
                { answerText: 225, isCorrect: false},
                { answerText: 192, isCorrect: false},
            ]
        },
        {
            image: IQtest_question23,
            questionText: (
                <>
                    Draw the missing figure in the above sequence.
                </>
            ),
            answerOptions: [
                { image: IQtest_answer23_a, isCorrect: false},
                { image: IQtest_answer23_b, isCorrect: false},
                { image: IQtest_answer23_c, isCorrect: false},
            ]
        },
        {
            questionText: (
                <>
                    How many minutes is it before 12 noon if nine minutes ago it was twice as
many minutes past 10 am
                </>
            ),
            answerOptions: [
                { answerText: 5, isCorrect: false},
                { answerText: 132, isCorrect: false},
                { answerText: 66, isCorrect: false},
                { answerText: 45, isCorrect: false},
                { answerText: 20, isCorrect: false},
                { answerText: 54, isCorrect: false},
                { answerText: 225, isCorrect: false},
                { answerText: 192, isCorrect: false},
            ]
        },
        {
            image: IQtest_question25,
            questionText: (
                <>
                    To which hexagon below can a dot be added so that both dots then meet the
same conditions as the two dots in the hexagon above?
                </>
            ),
            answerOptions: [
                { image: IQtest_answer25_a, isCorrect: false},
                { image: IQtest_answer25_b, isCorrect: false},
                { image: IQtest_answer25_c, isCorrect: false},
                { image: IQtest_answer25_d, isCorrect: false},
                { image: IQtest_answer25_e, isCorrect: false},
            ]
        },
        {
            image: IQtest_question26,
            questionText: (
                <>
                    What letter is directly opposite the letter that is two letters away clockwise from
the letter that is directly opposite the letter E?
                </>
            ),
            answerOptions: [
                { answerText: "A", isCorrect: false},
                { answerText: "B", isCorrect: false},
                { answerText: "C", isCorrect: false},
                { answerText: "D", isCorrect: false},
                { answerText: "E", isCorrect: false},
                { answerText: "F", isCorrect: false},
                { answerText: "G", isCorrect: false},
                { answerText: "H", isCorrect: false},
            ]
        },
        {
            image: IQtest_question27,
            questionText: (
                <>
                    What number should replace the question mark?
                </>
            ),
            answerOptions: [
                { answerText: 9, isCorrect: false},
                { answerText: 7, isCorrect: false},
                { answerText: 2, isCorrect: false},
                { answerText: 5, isCorrect: false},
                { answerText: 6, isCorrect: false},
                { answerText: 4, isCorrect: false},
                { answerText: 3, isCorrect: false},
                { answerText: 2, isCorrect: false},
            ]
        },
        {
            image: IQtest_question28,
            questionText: (
                <>
                    Which is the missing section?
                </>
            ),
            answerOptions: [
                { image: IQtest_answer28_a, isCorrect: false},
                { image: IQtest_answer28_b, isCorrect: false},
                { image: IQtest_answer28_c, isCorrect: false},
                { image: IQtest_answer28_d, isCorrect: false},
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
                            <p className="question-text">{questions[currentQuestion].questionText2}</p>
                            <p className="question-text">{questions[currentQuestion].questionText3}</p>
                        
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