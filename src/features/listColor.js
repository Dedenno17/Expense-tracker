import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '';

export const listColorSlice = createSlice({
    name: 'listColor',
    initialState: {listColor: initialStateValue},
    reducers :{
        setListColor : (state, action) => {
            while(state.listColor === action.payload) {
                action.payload = Math.floor(Math.random() * (5 - 0) + 0);
            }
            state.listColor = action.payload;
        },
        setReturnColor: (state) => {
            const colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51' ];
            return colors[state.listColor];
        }
    }
})

export const { setListColor, setReturnColor } = listColorSlice.actions;

export default listColorSlice.reducer;
