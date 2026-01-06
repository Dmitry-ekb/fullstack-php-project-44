import { getRandomNumber } from '../utils.js'

const findGCD = (num1, num2) => {
  let a = Math.abs(num1)
  let b = Math.abs(num2)
  
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const rules = 'Find the greatest common divisor of given numbers.'

export const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber()
  const number2 = getRandomNumber()
  const question = `${number1} ${number2}`
  const correctAnswer = String(findGCD(number1, number2))

  return {
    question,
    correctAnswer
  }
}
