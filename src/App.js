import React, { Component } from 'react';
import './App.css';
import './Allumettes.js'


const createPlateau = require('./createPlateau')
// const getUserInput = require('./getUserInput')
const getBotInput = require('./getBotInput')
const updateAllumettes = require('./updateAllumettes')
const gameIsDone = require('./gameIsDone')

const allumettes = [
  [1],
  [1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1]
]



/*
1. De créer un composant qui affiche le tableau 'allumettes'
2. Créer des input box pour récupérer les saisies de l'utilisateur
3. Checker les saisies avec les fonctions de check comme dans getUserInput
4. Ensuite appliquer les changements sur les allumettes du state avec updateAllumettes
4. Un bouton pour terminer le tour
5. Quand c'est au tour de l'IA, il faut que tu utilises la fonction getBotInput pour avoir les inputs de l'IA
6. Utiliser la fonction gameIsDone à chaque tour pour vérifier l'état de la partie
7. Proposer un bouton pour reset la partie (optionnel)
*/

class App extends Component {
  constructor() {
    super()

    this.state = {
      gameState: 1,
      plateau: createPlateau(allumettes)
    }
  }



  render() {

    const plateau  = this.state.plateau

    return (
      <div>
        {plateau}
      </div>
    )
  }
}

export default App;
