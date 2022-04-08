import { configureStore } from '@reduxjs/toolkit';

// reducers
import expensesReducer from '../features/expenses';

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
