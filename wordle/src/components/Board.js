import React, { useState } from 'react'
import { BoardDefault } from './Words'

function Board() {
    const [board, setBoard] = useState(BoardDefault);
    return (
        <div>Board</div>
    )
}

export default Board