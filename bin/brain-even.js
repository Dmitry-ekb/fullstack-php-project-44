#!/usr/bin/env node
import runGame from '../src/engine.js'
import { rules, getQuestionAndAnswer } from '../src/games/even.js'

runGame(rules, getQuestionAndAnswer)
