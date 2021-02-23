function getRandom(min ,max){
	return Math.floor(Math.random()*(max-min)+min);
}

function getBotInput(allumettes) {
  const availablesLines = []
  
  allumettes.forEach((line, index) => {
    const numberOfMatches = line.reduce((match, number) => match + number, 0)
    if (numberOfMatches > 0){
      availablesLines.push({
        line: index,
        matches: getRandom(1, numberOfMatches)
      })
    }
  })

  return availablesLines[getRandom(0, availablesLines.length)]
}

module.exports = getBotInput