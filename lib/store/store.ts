import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import lessonsReducer from './features/lessonsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      lessons: lessonsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
