import { TResponseRedux } from "../../../types";
import { TBookingData } from "../../../types/booking.type";
import { baseApi } from "../../api/baseApi";
const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking:builder.mutation({
      query:(payload)=>({
        url:`/bookings`,
        body:payload,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Bookings', id: 'LIST' }],
    }),
    updateBooking:builder.mutation({
      query:({payload,id})=>({
        url:`/bookings/${id}`,
        body:payload,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Bookings', id: 'LIST' }],
    }),
    deleteBookings:builder.mutation({
      query:(id)=>({
        url:`/bookings/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Bookings', id: 'LIST' }],
    }),
    getMyBookings: builder.query({
      query: (id) => {
        
        return {
          url: `/bookings/${id}`,
          method: 'GET',
          
        };
        
      },
      transformResponse: (response: TResponseRedux<TBookingData[]>) => {
        if (response.success) {
          return response?.data || []; 
        } else {
          console.error(response.error?.data.message); 
          return []; 
        }
      },
      providesTags: [{ type: 'Bookings', id: 'LIST' }],
    }),
    getAllBookings:builder.query({
      query:()=>({
        url:`/bookings`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBookingData[]>) => {
        
        if (response.success) {
          return response?.data || {}; 
        } else {
          console.error(response.error?.data.message); 
          return {}; 
        }
      },
      providesTags: [{ type: 'Bookings', id: 'LIST' }],
    }),
    
    
  }),
  
});

export const { useGetMyBookingsQuery,useGetAllBookingsQuery,useCreateBookingMutation,useUpdateBookingMutation,useDeleteBookingsMutation } = bookingApi;
