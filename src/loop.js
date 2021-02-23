const createPlateau = require('./createPlateau')
const getUserInput = require('./getUserInput')
const getBotInput = require('./getBotInput')
const updateAllumettes = require('./updateAllumettes')
const gameIsDone = require('./gameIsDone')
const allumettes = [
  [1],
  [1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1,1,1]
]

async function loop() {
  let isPlayerTurn = true

  while(1){
    //Afficher le plateau
    console.log(createPlateau(allumettes))

    //Afficher le joueur qui doit jouer
    
    if (isPlayerTurn) {
      console.log('Your turn:')
    } else {
      console.log('AI’s turn...')
    }

    //Récupérer les entrées de l'utilisateur
 
    let line
    let matches

    if (isPlayerTurn) {
      const userInput = await getUserInput(allumettes)

      line = userInput.line
      matches = userInput.matches
      console.log(`Player removed ${matches} match(es) from line ${line + 1}`)
    } else {
      const botInput = getBotInput(allumettes)
      line = botInput.line
      matches = botInput.matches
      console.log(`AI removed ${matches} match(es) from line ${line + 1}`)
    }

    // Enlever les allumettes

    updateAllumettes(allumettes, line, matches)

    //Afficher le message de résumé

    
    if (gameIsDone(allumettes)) {
      console.log(createPlateau(allumettes))
      break;
    }
  
    isPlayerTurn = !isPlayerTurn
  }
  
  if (!isPlayerTurn) {
    console.log('Bravo, you won')
  } else {
    console.log('You lost')
  }
}

loop();

module.exports = loop