#!  /usr/bin/env node
import inquirer from 'inquirer';
// Define quiz questions and answers
const quizQuestions = [
    {
        question: 'What is the capital of France?',
        choices: ['London', 'Paris', 'Berlin', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'Who is the author of "Harry Potter" series?',
        choices: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'J.R.R. Tolkien'],
        answer: 'J.K. Rowling'
    },
    {
        question: 'What is the largest planet in our solar system?',
        choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Jupiter'
    }
];
// Function to display quiz questions and check answers
async function startQuiz() {
    let score = 0;
    for (const { question, choices, answer } of quizQuestions) {
        const userAnswer = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedAnswer',
                message: question,
                choices: choices
            }
        ]);
        if (userAnswer.selectedAnswer === answer) {
            console.log('Correct!');
            score++;
        }
        else {
            console.log(`Incorrect! The correct answer is: ${answer}`);
        }
    }
    console.log(`Quiz completed! Your score: ${score} out of ${quizQuestions.length}`);
}
// Start the quiz
startQuiz();
