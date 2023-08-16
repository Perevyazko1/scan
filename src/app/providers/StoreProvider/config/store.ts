import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { postApi } from "app/providers/services/RtkService";
import authReducer from "../../../../pages/AuthorizatePage/model/AuthSlice";

const rootReducer = combineReducers({
    authReducer,
    [postApi.reducerPath]: postApi.reducer
})


export const setupStore = ()=> {
    return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware)
})
}

export type RootState = ReturnType<typeof  rootReducer>
export type AppStore = ReturnType<typeof  setupStore>
export type AppDispatch = AppStore["dispatch"]

