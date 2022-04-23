import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({ keyVal, bigKey, disabled, correct, almost }) {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);

  const sellectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    } else if (keyVal === 'DEL') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  }
  return (
    <div className="key"
      id={bigKey ? "big" : disabled ? "disabled" : correct ? "correct" : almost ? "almost" : ""}
      onClick={sellectLetter}>
      {keyVal}
    </div>
  )
}

export default Key