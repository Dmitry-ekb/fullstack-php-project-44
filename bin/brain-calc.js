#!/usr/bin/env node
import runGame from '../src/engine.js'
import { rules, getQuestionAndAnswer } from '../src/games/calc.js'

runGame(rules, getQuestionAndAnswer)
