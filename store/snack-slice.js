import { createSlice } from '@reduxjs/toolkit';

const snackSlice = createSlice({
  name: 'slice',
  initialState: [],
  reducers: {
    addSnack(state, action) {
      state.push(action.payload);
    },
    removeSnack(state, action) {
      let index = state.findIndex(
        (snack) => snack.timestamp === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const snackActions = snackSlice.actions;

export default snackSlice;
