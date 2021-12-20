import React, { useState } from 'react';
import { IconsoleRow } from './types';
import { RootState } from './store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addConsRow } from './store/consRowSlice';

import './App.css';

function App() {
  const [command, setCommand] = useState('');

  const consoleRows = useSelector((state: RootState) => state.rows.consRows);

  const dispatch = useDispatch();


  const enterHandler = () => {
    dispatch(addConsRow({ command }));
    setCommand('');
  };

  const arrowUpHandler = () => {

  };
  const arrowDownHandler = () => {

   };
  const keyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "Enter":
        enterHandler();
        break;
      case "ArrowUp":
        arrowUpHandler();
        break;
      case "ArrowDown":
        arrowDownHandler();
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {
        consoleRows.map((item, index: number) => (
          <div key={item.id} className="inputWrap">
            <p className="outputField">
              {item.outputText}
            </p>
            <span className="adress">
              {item.adress}&gt;
            </span>
          </div>
        ))
      }
      <input
        className="inputField"
        type="text"
        autoFocus
        value={command}
        /* ref={inputRef} */
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommand(e.target.value)}
        onKeyDown={keyPressHandler}
      />
    </div>
  );
}

export default App;
