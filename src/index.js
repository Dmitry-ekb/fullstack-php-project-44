import readlineSync from 'readline-sync'
import askName from './cli.js'

const roundsCount = 3

const runGame = (rules, getQuestionAndAnswer) => {
  const name = askName()
  console.log(rules)

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
