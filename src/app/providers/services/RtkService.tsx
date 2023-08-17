import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Token} from "../StoreProvider/models/Token";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://gateway.scan-interfax.ru/api/v1",
        timeout: 2000
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        loginApi: build.mutation<Token, Token>({
            query: ({ login, password }) => ({
                url:`/account/login`,
                method: 'POST',
                body: { login, password },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }),
            invalidatesTags: ['Post']
        }),
        companyCount: build.query({
            query:(arg)=>({
                url: `/account/info` ,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

        }),
            providesTags: result => ["Post"]
        })
})
})