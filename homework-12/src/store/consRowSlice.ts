import { createSlice } from '@reduxjs/toolkit';
interface IActionAddRow {
  type: string;
  payload: { command: string }
}

const consRowSlice = createSlice({
  name: 'consRows',
  initialState: {
    consRows: [{
      id: new Date().toISOString(),
      adress: 'C:/',
      command: '',
      outputText: ''
    }],
    counter: 0,
    inputCommand: '',
  },
  reducers: {
    addConsRow(state, action: IActionAddRow) {
      const currentAdress = state.consRows[state.consRows.length - 1].adress;
      const currentOutputText = state.consRows[state.consRows.length - 1].outputText;

      const currentCommand = action.payload.command.trim();
      const currentCommandType = currentCommand.split(' ')[0];
      const currentCommandValue = currentCommand.split(' ')[1];

      if (currentCommand.length) {
        state.consRows.push({
          id: new Date().toISOString(),
          adress: formatAdress(),
          command: action.payload.command,
          outputText: formatOutput(),
        })
      } else {
        state.consRows.push({
          id: new Date().toISOString(),
          adress: currentAdress,
          command: action.payload.command,
          outputText: currentOutputText,
        })
      }
      function formatAdress() {
        if (currentCommandValue && currentCommandType === 'cd') {
          switch (currentCommandValue) {
            case '/':
              return 'C:/';
            case '../':
              if(currentAdress === 'C:/') {
                return 'C:/';
              } else {
                return `${currentAdress.split('/').slice(0, -1).join('/')}`;
              }         
            default:
              return `${currentAdress}/${currentCommandValue}`;
          }
        }
        return currentAdress;
      }
      function formatOutput() {
        if(currentCommandValue && currentCommandType === 'print') {
          return `${currentCommandValue}`;
        }else if(currentCommandValue && currentCommandType === 'cd'){
          return '';
        }
        return `'${currentCommand}' не является внутренней или внешней командой,
         исполняемой программой или пакетным файлом.
         Поддерживаются комманды:
          print somemessage 
          cd someplace 
          cd / 
          cd ../ `;
      }
    },
    setInputCommand(state,action) {
      state.inputCommand = action.payload.inputCommand;
    },
    setCounter(state, action) {
      state.counter = state.counter + action.payload.increment;
    },
    getCommand(state, action) {
      state.counter = state.counter + action.payload;
      const commands = state.consRows.map(item => item.command);
      state.inputCommand = commands[commands.length - state.counter];
    },
    // getNextCommand(state, action) {
    //   state.counter = --state.counter;
    //   const commands = state.consRows.map(item => item.command);
    //   state.inputCommand = commands[commands.length - state.counter];
    // }
  },
});

export const { addConsRow, setCounter, setInputCommand } = consRowSlice.actions;

export default consRowSlice.reducer;