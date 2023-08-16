import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthPageState {
    isauthorized: boolean;
    pageIsLoading: boolean;
    error: string;
}

const initialState: AuthPageState = {
    isauthorized: false,
    pageIsLoading: false,
    error: ""
}

export const authPageSlice = createSlice({
    name: 'authPage',
    initialState,
    reducers: {
        addauth(state, action: PayloadAction<boolean>){
            state.isauthorized = action.payload
        }
    }
})

export default authPageSlice.reducer;