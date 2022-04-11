import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
    {
    id: Math.random(),
    title: 'Bought Milk',
    amount: '233',
    date: new Date('2022/04/04'),
    category: 'health',
    num: 2
},
{
    id: Math.random() + 0.1,
    title: 'Gym Membership',
    amount: '3567',
    date: new Date('2022/03/05'),
    category: 'hobby',
    num: 3
}
];

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