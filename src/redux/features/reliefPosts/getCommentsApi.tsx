import { baseApi } from "../../api/baseApi";
 const getCommentsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getComment:builder.query({
            query: () => ({
                url: '/community',
                method: "GET",
               
            })
        })
    })
 });

 export const { useGetCommentQuery} = getCommentsApi;