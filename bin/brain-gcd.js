#!/usr/bin/env node
import runGame from '../src/index.js'
import { rules, getQuestionAndAnswer } from '../src/games/gcd.js'

runGame(rules, getQuestionAndAnswer)
