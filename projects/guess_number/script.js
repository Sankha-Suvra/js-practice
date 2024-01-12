const randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#btn')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultArea = document.querySelector('.resultArea')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true 