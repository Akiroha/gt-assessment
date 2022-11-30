import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticleType } from '../types';

const initialState: ArticleType[] = [];

const pinnedSlice = createSlice({
  name: 'pinned',
  initialState: initialState,
  reducers: {
    hydrate(state, action) {
      return action.payload;
    },
    addArticle(state, action: PayloadAction<ArticleType>) {
      state.push(action.payload);
    },
    removeArticle(state, action: PayloadAction<string>) {
      let index = state.findIndex(
        (article) => article.article === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const pinnedActions = pinnedSlice.actions;

export default pinnedSlice;
