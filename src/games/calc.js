const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  return operators[randomIndex]
}

const calculateAnswer = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      return 0
  }
}

export const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperator()
  const correctAnswer = calculateAnswer(num1, operator, num2)
  const question = `${num1} ${operator} ${num2}`
  return {
    question,
    correctAnswer: String(correctAnswer)
  }
}

export const rules = 'What is the result of the expression?'
