import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const addCommentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
       addComment:builder.mutation({
            query: (postInfo) => ({
                url: '/community',
                method: "POST",
                body:postInfo
            })
        }),
    })
});

// Destructure the hook after defining the API endpoint
export const { useAddCommentMutation } =addCommentApi;
