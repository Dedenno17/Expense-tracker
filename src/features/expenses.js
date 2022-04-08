import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [{
    id: Math.random(),
    title: 'Bought Milk',
    amount: '233',
    date: new Date(2022, 4, 4),
    category: 'health'
},
{
    id: Math.random() + 0.2,
    title: 'Gym Membership',
    amount: '3567',
    date: new Date(2022, 4, 4),
    category: 'hobby'
}];

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {expenses: initialStateValue},
    reducers: {
        setExpenses: (state, action) => {
            state.expenses = action.payload;
        },
    }
})

export const { setExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;