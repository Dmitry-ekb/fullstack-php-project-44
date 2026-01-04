#!/usr/bin/env node
import readlineSync from 'readline-sync'
const askName = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name // ← только имя, без правил
}
const name = askName()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}
const isEven = (number) => {
  const isEvenNumber = number % 2 === 0 
  return isEvenNumber
}
const playGame = () => {
  for (let i = 0; i < 3; i +=1) {
    const number = getRandomNumber()
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}`)
    return
    }
    
  }
  console.log(`Congratulations, ${name}!`)
}
playGame()
