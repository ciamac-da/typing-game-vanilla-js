const word = document.getElementById("word")
const text = document.getElementById("text")
const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")
const endgameEl = document.getElementById("end-game")
const settingsBtn = document.getElementById("setting-btn")
const settings = document.getElementById("settings")
const settingsForm = document.getElementById("settings-form")
const difficultySelect = document.getElementById("difficulty")

// List of words of games
const words = [
  "sigh",
  "airplane",
  "tense",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "react",
  "javascript",
  "bootstrap",
  "jquery",
  "html",
  "nodejs",
  "mongodb",
  "hacking",
  "pug",
  "graphql",
  "typescript",
]

// Init word
let randomWord;
// Init score
let score = 0;
// Init time
let time = 10;

// Generate random word
const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}
getRandomWord()

// Add word to DOM
const addWordToDOM = () => {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}
addWordToDOM()

// Update score
const updateScore = () => {
  score++
  scoreEl.innerHTML = score
}

// Event listeners
text.addEventListener("input", e => {
const insertedText = e.target.value
if(insertedText === randomWord) {
  addWordToDOM()
  updateScore()
  text.value = ""
}
})
