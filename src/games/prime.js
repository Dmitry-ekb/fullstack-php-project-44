import { getRandomNumber } from '../utils.js'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }
  
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }
  
  return true
}

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  
  return {
    question: String(number),
    correctAnswer,
  }
}
