const prompt = require('prompt');
const { checkLine, checkMatches } = require('./checkInput')

async function getUserInput(allumettes) {
  let line
  let matches

  while (true) {
    const { line: inputLine } = await prompt.get(['line'])

    const checkMessage = checkLine(inputLine, allumettes)

    if (checkMessage === 'ok') {
      line = +inputLine
      break;
    }
    console.log(checkMessage)
  }
  while (true) {
    const { matches: inputMatches } = await prompt.get(['matches'])

    const checkMessage = checkMatches(inputMatches, line, allumettes)

    if (checkMessage === 'ok') {
      matches = +inputMatches
      break;
    }
    console.log(checkMessage)
  }

  return {
    line: line - 1,
    matches
  }
}

module.exports = getUserInput