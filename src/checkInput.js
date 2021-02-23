function checkLine(line, allumettes) {
  if (isNaN(line)) {
    return "line must be an integer"
  }
  if (line < 1 || line > 4) {
    return "line must be between 1 and 4"
  }
  if (!allumettes[line - 1].some(match => match === 1)) {
    return "line must have at least one match"
  }
  return "ok"
}

function checkMatches(matches, line, allumettes) {
  if (isNaN(matches)) {
    return "match must be an integer"
  }
  if (matches == 0) {
    return "you must take at least one match"
  }
  if (allumettes[line - 1].reduce((match, number) => number + match, 0) < matches) {
    return "not enough matches on this line"
  }

  return "ok"
}

module.exports = {
  checkLine,
  checkMatches
}