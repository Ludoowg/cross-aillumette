function gameIsDone(allumettes) {
  for (const line of allumettes) {
    for (const allumette of line) {
      if (allumette === 1) {
        return false
      }
    }
  }

  return true
}

module.exports = gameIsDone