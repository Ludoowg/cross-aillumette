import React from 'react'

const HIDDEN_SYMBOL = ''

const Allumettes = ({ allumette, feedback }) => (
    <div className="Alumette">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : allumette }
    </div>
)

export default Allumettes
