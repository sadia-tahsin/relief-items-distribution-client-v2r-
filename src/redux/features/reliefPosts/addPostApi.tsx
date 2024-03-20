import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const addPostApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
       addPost:builder.mutation({
            query: (postInfo) => ({
                url: '/create-supply',
                method: "POST",
                body:postInfo
            })
        }),
    })
});

// Destructure the hook after defining the API endpoint
export const { useAddPostMutation } =addPostApi;
