#!/usr/bin/env node
import runGame from '../src/index.js'
import { rules, getQuestionAndAnswer } from '../src/games/even.js'

runGame(rules, getQuestionAndAnswer)
