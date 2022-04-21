import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {createContext, useState} from 'react';
import {BoardDefault, generateWordSet} from './components/Words'

export const AppContext = createContext();

function App() {
  
  const [board, setBoard] = useState(BoardDefault);
  const [currAtempt, setCurrAtempt] = useState({attempt: 0, letterPos: 0})
  
  useEffect(()=>
  {

  }, [])

  const onSelectLetter = (keyVal)=>{
    
    if (currAtempt.letterPos > 4) return;
    const newBoard = [...Board]
    newBoard[currAtempt.atempt][currAtempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAtempt({...currAtempt, letterPos: currAtempt.letterPos + 1 })

  }
  const onDelete = ()=>{
    
    if (currAtempt.letterPos === 0) return;
    const newBoard = [...Board];
    newBoard[currAtempt.atempt][currAtempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAtempt({...currAtempt, letterPos: currAtempt.letterPos - 1 })

  }
  const onEnter = ()=>{
    
    if (currAtempt.letterPos !== 5) return;
    setCurrAtempt({atempt:currAtempt.atempt +1, letterPos: 0})

  }
  

  return (
    <div className="App">
      <nav>
        <h1>Ru Wordle</h1>
      </nav>
      <AppContext.Provider value={{board,setBoard,currAtempt, setCurrAtempt, onDelete, onEnter, onSelectLetter,correctWord}}>
        <div className="game">
      <Board />
      <Keyboard />
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
