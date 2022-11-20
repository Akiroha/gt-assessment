import { createSlice } from '@reduxjs/toolkit';

const networkSlice = createSlice({
  name: 'network',
  initialState: true,
  reducers: {
    setNetworkStatus(state, action) {
      return action.payload;
    },
  },
});

export const networkActions = networkSlice.actions;

export default networkSlice;
