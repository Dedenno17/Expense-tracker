import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../features/expenses'

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});
