
function updateAllumettes(allumettes, line, matchesToRemove) {
  allumettes[line].forEach((allumette, index) => {
    if (matchesToRemove === 0) {
      return 
    }
    if (allumette === 1) {
      allumettes[line][index] = 0
      matchesToRemove--
    }
  })
}

module.exports = updateAllumettes