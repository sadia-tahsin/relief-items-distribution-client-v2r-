import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://imposing-ratio-376319.web.app/api/v1',
    credentials: "include"
}),
    endpoints:()=>({})
});