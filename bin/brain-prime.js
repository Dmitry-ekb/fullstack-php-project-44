#!/usr/bin/env node
import runGame from '../src/index.js'
import { rules, getQuestionAndAnswer } from '../src/games/prime.js'

runGame(rules, getQuestionAndAnswer)
