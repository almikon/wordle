import React from 'react'
import {AppContext} from '../App'

function Letter({letterPos, attemptVal}) {
    const {Board, correctWord, currAtempt} = useContext(AppContext);

    const letter=Board[attemptVal][letterPos];
    const correct = correctWord[letterPos] == letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);
    const letterState = currAtempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");


    return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}

export default Letter