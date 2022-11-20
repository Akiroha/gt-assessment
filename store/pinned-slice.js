import { createSlice } from '@reduxjs/toolkit';

const pinnedSlice = createSlice({
  name: 'pinned',
  initialState: [],
  reducers: {
    hydrate(state, action) {
      return action.payload;
    },
    addArticle(state, action) {
      state.push(action.payload);
    },
    removeArticle(state, action) {
      let index = state.findIndex(
        (article) => article.article === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const pinnedActions = pinnedSlice.actions;

export default pinnedSlice;
