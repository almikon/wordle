import React from 'react'
import {AppContext} from '../App'

function Letter({letterPos, attemptVal}) {
    const {Board} = useContext(AppContext);
    const letter=Board[attemptVal][letterPos];
    return (
    <div className="letter">{letter}</div>
  )
}

export default Letter