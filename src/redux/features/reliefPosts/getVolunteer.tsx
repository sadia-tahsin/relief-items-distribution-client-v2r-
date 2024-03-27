import { baseApi } from "../../api/baseApi";
 const getAllVolunteerApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllVolunteer:builder.query({
            query: () => ({
                url: '/about-us',
                method: "GET",
               
            })
        })
    })
 });

 export const { useGetAllVolunteerQuery} = getAllVolunteerApi;