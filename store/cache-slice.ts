import { createSlice } from '@reduxjs/toolkit';
import { ArticleType } from '../types';

interface LooseObject {
  [key: string]: ArticleType[];
}

const initialState: LooseObject = {};

const cacheSlice = createSlice({
  name: 'cache',
  initialState: initialState,
  reducers: {
    addToCache(state, action) {
      const { date, articles } = action.payload;
      state[date] = articles;
    },
  },
});

export const cacheActions = cacheSlice.actions;

export default cacheSlice;
