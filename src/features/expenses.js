import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [{
    id: 1,
    title: 'Bought Milk',
    price: '233',
    date: new Date('2022-04-04'),
},
{
    id: 2,
    title: '',
    price: '',
    date: new Date('2022-04-04'),
}];

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {expenses: initialStateValue},
    reducers: {
        setExpenses: (state, action) => {
            state.expenses = action.payload;
        }
    }
})

export const { setExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;