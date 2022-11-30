import { configureStore } from '@reduxjs/toolkit';
import snackSlice from './snack-slice';
import pinnedSlice from './pinned-slice';
import networkSlice from './network-slice';
import cacheSlice from './cache-slice';
import LocalStorage from '../services/LocalStorage';

const local = new LocalStorage();

const store = configureStore({
  reducer: {
    snack: snackSlice.reducer,
    pinned: pinnedSlice.reducer,
    network: networkSlice.reducer,
    cache: cacheSlice.reducer,
  },
});

store.subscribe(() => {
  local.setItem('pinned', store.getState().pinned);
});

export type StateType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;

export default store;
