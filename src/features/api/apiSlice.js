import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        prepareHeaders: (headers) => {
            headers.set('content-Type', 'application/json');
            return headers;

        },
    }),

    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (userData) => ({
                url: '/signup',
                method: 'POST',
                body: JSON.stringify(userData),
            }),
        }),
        loginUser: builder.mutation({
            query: (loginData) => ({
                url: '/login',
                method: 'POST',
                body: loginData,
            }),
        }),

    }),

});

export const { useSignUpUserMutation, useLoginUserMutation  } = apiSlice;
