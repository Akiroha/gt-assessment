import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackType } from '../types';

const initialState: SnackType[] = [];

const snackSlice = createSlice({
  name: 'slice',
  initialState: initialState,
  reducers: {
    addSnack(state, action: PayloadAction<SnackType>) {
      state.push(action.payload);
    },
    removeSnack(state, action: PayloadAction<string>) {
      let index = state.findIndex(
        (snack) => snack.timestamp === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const snackActions = snackSlice.actions;

export default snackSlice;
