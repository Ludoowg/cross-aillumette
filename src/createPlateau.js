function createPlateau(allumettes) {
  let plateau = '*********\n'

  for (let i = 0; i < 4; i++) {
    const ligne = allumettes[i]

    plateau += '*'

    const spaces = (7 - ligne.length) / 2

    plateau += ' '.repeat(spaces)

    plateau += ligne.reduce((string, allumette) => {
      string += allumette === 1 ? '|' : ' '

      return string
    }, '')

    plateau += ' '.repeat(spaces)

    plateau += '*\n'
  }

  plateau += '*********'

  return plateau
}

module.exports = createPlateau