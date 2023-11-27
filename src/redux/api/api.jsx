import {createApi} from '@reduxjs/toolkit/query/react';
import { axios_instance } from '../../axios/instance';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: async(args, api, extraOptions)=>{
        try{
            const { endpoint, query, body } = args;
            const response = await axios_instance({
                url: `${endpoint}`,
                method: extraOptions.method,
                params: query,
                data: body
            });
            console.log(response.status)
            return { data: response.data, status: response.status };
        } catch(error){
            console.log(error.message);
            throw error;
        }
    },
    endpoints: (builder)=>({
        signup: builder.mutation({
            query: (user_data)=>({
                endpoint: "/user/signup",
                body: user_data
            }),
            extraOptions:{
                method: 'POST'
            }
        })
    })
});

export const {useSignupMutation} = api;