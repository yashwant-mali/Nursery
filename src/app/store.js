import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";


const store = configureStore({
    reducer: {[apiSlice.reducer]:apiSlice.reducer},

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;