#!/usr/bin/env node
import runGame from '../src/index.js'
import { rules, getQuestionAndAnswer } from '../src/games/calc.js'

runGame(rules, getQuestionAndAnswer)
