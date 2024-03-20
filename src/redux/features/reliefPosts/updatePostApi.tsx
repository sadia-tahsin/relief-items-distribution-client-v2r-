import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const updatePostApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updatePost: builder.mutation({
            query: ({_id,...postInfo}) => ({
                url: `/update-supply/${_id}`,
                method: "PUT",
                body: postInfo
            })
        }),
    })
});

// Destructure the hook after defining the API endpoint
export const { useUpdatePostMutation } = updatePostApi;
