import {createSlice} from '@reduxjs/toolkit'

const initialstate = [];

const cartSlice = createSlice({
    name: 'cart',
    initialstate,
    reducers: {
        add(state, action){
            state.push(action.payload);
        }
    }

})

export const {add} = cartSlice.actions;
export default cartSlice.reducer;