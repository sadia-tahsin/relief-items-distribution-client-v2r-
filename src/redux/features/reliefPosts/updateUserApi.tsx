import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const updateUserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: ({_id,...userInfo}) => ({
                url: `/update-user/${userInfo.email}`,
                method: "PUT",
                body: userInfo
            })
        }),
    })
});

// Destructure the hook after defining the API endpoint
export const { useUpdateUserMutation } = updateUserApi;
