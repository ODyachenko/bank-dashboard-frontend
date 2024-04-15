import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import navSlice from './slices/navSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    nav: navSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
