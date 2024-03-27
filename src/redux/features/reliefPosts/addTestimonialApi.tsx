import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const addTestimonialApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
       addTestimonial:builder.mutation({
            query: (postInfo) => ({
                url: '/dashboard/create-testimonial',
                method: "POST",
                body:postInfo
            })
        }),
    })
});

// Destructure the hook after defining the API endpoint
export const { useAddTestimonialMutation } =addTestimonialApi;
