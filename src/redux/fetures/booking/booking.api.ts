import { TResponseRedux, TRoomData,TQueryParams, TSingleRoom } from "../../../types";
import { baseApi } from "../../api/baseApi";
const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking:builder.mutation({
      query:(payload)=>({
        url:`/bookings`,
        body:payload,
        method: 'POST',
      }),
     
    }),
    getMyBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args){
            args.forEach((item:TQueryParams) => {
             params.append(item.name,item.value as string)
           });
        }
        return {
          url: `/my-bookings`,
          method: 'GET',
          params:params
        };
      },
      transformResponse: (response: TResponseRedux<TRoomData[]>) => {
        if (response.success) {
          return response?.data || []; 
        } else {
          console.error(response.error?.data.message); 
          return []; 
        }
      },
    }),
    getSingleRoom:builder.query({
      query:(id:string)=>({
        url:`/rooms/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TSingleRoom>) => {
        
        if (response.success) {
          return response?.data || {}; 
        } else {
          console.error(response.error?.data.message); 
          return {}; 
        }
      },
    }),
    
    
  }),
  
});

export const { useGetMyBookingsQuery,useGetSingleRoomQuery,useCreateBookingMutation } = bookingApi;
