import React from 'react';
import Quiz from 'react-quiz-component';

const QuizDatabases = () => {

    const quiz = {
        "quizTitle": "title",
        "quizSynopsis": "quiz",
        "questions": [
        {
            "questionType": "text",
            "answers": [
                "True",
                "False"
            ],
            "correctAnswer": "1",
            "question": "Database administrator operates, secures and maintains the database.",
            "point": "1"
        },
        {
            "question": "Using which language can a user request information from a database ?",
            "answers": [
                "Query",
                "Relational",
                "Structural"
            ],
            "questionType": "text",
            "correctAnswer": "1",
            "point": "1"
        },
        {
            "question": "Which one of the following is a procedural language?",
            "answers": [
                "Domain relational calculus",
                "Query language",
                "Relational algebra"
            ],
            "correctAnswer": "3",
            "point": "1",
            "questionType": "text"
        },
        {
            "question": "A request for information from a database.",
            "answers": [
                "Notation",
                "Query",
                "Relation"
            ],
            "correctAnswer": "2",
            "point": "1",
            "questionType": "text"
        },
        {
            "question": "In Hierarchical DBMS, a parent can have only one child.",
            "questionType": "text",
            "answers": [
                "True",
                "False"
            ],
            "correctAnswer": "2",
            "point": "1"
        },
        {
            "question": "Which of the three schemas used in the three-schema model represents how the user view the database?",
            "questionType": "text",
            "answers": [
                "Internal",
                "Conceptual",
                "External"
            ],
            "correctAnswer": "3",
            "point": "1"
        }
    ]
    }


    return (
        <Quiz quiz={quiz}> </Quiz>
    );
};

export default QuizDatabases;