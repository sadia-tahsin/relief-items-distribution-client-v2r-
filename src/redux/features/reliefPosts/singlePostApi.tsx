
import { baseApi } from "../../api/baseApi";

// Define the API endpoint
const singleReliefPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSinglePost: builder.query({
      query: (id) => ({
        url: `/relief-goods/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Destructure the hook after defining the API endpoint
export const { useGetSinglePostQuery } = singleReliefPostApi;



