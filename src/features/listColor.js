import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = 0;

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
    }
})

export const { setListColor, setReturnColor } = listColorSlice.actions;

export default listColorSlice.reducer;
