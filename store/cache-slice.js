import { createSlice } from '@reduxjs/toolkit';

const cacheSlice = createSlice({
  name: 'cache',
  initialState: {},
  reducers: {
    addToCache(state, action) {
      const { date, articles } = action.payload;
      state[date] = articles;
    },
  },
});

export const cacheActions = cacheSlice.actions;

export default cacheSlice;
