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
