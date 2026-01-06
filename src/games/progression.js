import { getRandomNumber } from '../utils.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

export const rules = 'What number is missing in the progression?'

export const getQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 10)
  const hiddenIndex = getRandomNumber(0, progressionLength - 1)
  
  const progression = generateProgression(start, step, progressionLength)
  const hiddenValue = progression[hiddenIndex]
  
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  
  return {
    question,
    correctAnswer: String(hiddenValue),
  }
}
