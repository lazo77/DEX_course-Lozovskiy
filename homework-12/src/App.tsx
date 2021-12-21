import React, { useState } from 'react';
import { IconsoleRow } from './types';
import { RootState } from './store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addConsRow, setCounter, setInputCommand } from './store/consRowSlice';

import './App.css';

function App() {
  document.title = 'homework-12';
  const dispatch = useDispatch();

  const command = useSelector((state: RootState) => state.rows.inputCommand);
  const consoleRows = useSelector((state: RootState) => state.rows.consRows);
  const counter = useSelector((state: RootState) => state.rows.counter);
  const commands = consoleRows.map(item => item.command);

  const setCommand = (inputCommand: string) => {
    dispatch(setInputCommand({ inputCommand }));
  }

  const enterHandler = () => {
    dispatch(addConsRow({ command }));
    dispatch(setInputCommand({ inputCommand: '' }));
  };

  const arrowUpHandler = () => {
    dispatch(setCounter({increment: 1}));
    dispatch(setInputCommand({ inputCommand: commands[commands.length - counter] }));
  };
  const arrowDownHandler = () => {
    dispatch(setCounter({increment: -1}));
    dispatch(setInputCommand({ inputCommand: commands[commands.length - counter] }));
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
