import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {createContext, useState} from 'react';
import {BoardDefault} from './components/Words'

export const AppContext = createContext();

function App() {
  
  const [board, setBoard] = useState(BoardDefault);
  const [currAtempt, setCurrAtempt] = useState({attempt: 0, letterPos: 0})
  
  return (
    <div className="App">
      <nav>
        <h1>Ru Wordle</h1>
      </nav>
      <AppContext.Provider value={{board,setBoard,currAtempt, setCurrAtempt}}>
        <div className="game">
      <Board />
      <Keyboard />
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
