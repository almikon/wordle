import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({ keyVal, bigKey }) {
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
    <div className="key" id={bigKey && "big"} onClick={sellectLetter}>{keyVal}</div>
  )
}

export default Key