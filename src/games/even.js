const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const isEven = (number) => number % 2 === 0

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

export const getQuestionAndAnswer = () => {
  const number = getRandomNumber()
  return {
    question: `${number}`,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  }
}
