#!/usr/bin/env node
import runGame from '../src/index.js'
import { rules, getQuestionAndAnswer } from '../src/games/progression.js'

runGame(rules, getQuestionAndAnswer)
