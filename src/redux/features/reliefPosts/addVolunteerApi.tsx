import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const addVolunteerApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
       addVolunteer:builder.mutation({
            query: (volunteerInfo) => ({
                url: '/volunteer',
                method: "POST",
                body:volunteerInfo
            })
        }),
    })
});

// Destructure the hook after defining the API endpoint
export const { useAddVolunteerMutation } =addVolunteerApi;
