import React, {useContext} from 'react'
import {AppContext} from '../App'

function Key({keyVal}, bigKey) {
    if(keyVal === 'ENTER') {
        if (currAtempt.letterPos != 5) return;
        setCurrAtempt({atempt:currAtempt.atempt +1, letterPos: 0})
    } else if (keyVal === 'DEL'){
        if (currAtempt.letterPos === 0) return;
        const newBoard = [...Board];
        newBoard[currAtempt.atempt][currAtempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrAtempt({...currAtempt, letterPos: currAtempt.letterPos - 1 })
    }
    if (currAtempt.letterPos > 4) return;
    const {Board, setBoard, currAtempt} = useContext(AppContext);
    const selectLetter = () => {
        const newBoard = [...Board]
        newBoard[currAtempt.atempt][currAtempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAtempt({...currAtempt, letterPos: currAtempt.letterPos + 1 })
    }
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key