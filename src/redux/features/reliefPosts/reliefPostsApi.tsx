import { baseApi } from "../../api/baseApi";
 const reliefPostsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPosts:builder.query({
            query: () => ({
                url: '/relief-goods',
                method: "GET",
               
            })
        })
    })
 });

 export const { useGetAllPostsQuery} = reliefPostsApi;