import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const deletePostApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deletePost: builder.mutation({
            query: (_id) => ({
                url: `/delete-supply/${_id}`,
                method: "DELETE",
               
            })
        }),
    })
});

// Destructure the hook after defining the API endpoint
export const { useDeletePostMutation } = deletePostApi;
