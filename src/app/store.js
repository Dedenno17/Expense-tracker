import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../features/expenses';
import listColorReducer from '../features/listColor';

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    listColor: listColorReducer,
  },
});
