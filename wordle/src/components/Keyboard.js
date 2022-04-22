import React, { useEffect, useCallback, useContext } from 'react'
import { AppContext } from '../App'
import Key from './Key';

function Keyboard() {
  const line1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const line3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const { onEnter, onDelete, onSelectLetter, currAttempt, correctLetters, disabledLetters, almostLetters } = useContext(AppContext);
  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        line1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        line2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });

        line3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );


  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {line1.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key).toString()} correct={correctLetters.includes(key).toString()} almost={almostLetters.includes(key).toString()} />
        })}
      </div>
      <div className="line2">
        {line2.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key).toString()} correct={correctLetters.includes(key).toString()} almost={almostLetters.includes(key).toString()} />
        })}
      </div>
      <div className="line3">
        <Key keyVal={'ENTER'} bigKey />
        {line3.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key).toString()} correct={correctLetters.includes(key).toString()} almost={almostLetters.includes(key).toString()} />
        })}
        <Key keyVal={'DEL'} bigKey />
      </div>
    </div>
  );
}

export default Keyboard