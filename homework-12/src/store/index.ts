import {configureStore} from '@reduxjs/toolkit'
import consRowReducer from './consRowSlice';

export const store = configureStore({
  reducer: {
    rows: consRowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;