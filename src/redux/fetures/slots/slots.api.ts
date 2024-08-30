import { TQueryParams, TResponseRedux, TSlots } from "../../../types";
import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args){
            args.forEach((item:TQueryParams) => {
             params.append(item.name,item.value as string)
           });
        }

        return {
          url: `/slots/availability`,
          method: 'GET',
          params: params
        };
        
      },
      transformResponse: (response: TResponseRedux<TSlots[]>) => {
        if (response.success) {
          return response.data || [];
        } else {
          console.error(response.error?.data?.message || 'An error occurred');
          return [];
        }
      },
      providesTags: [{ type: 'Slots', id: 'LIST' }],
    }),
    createSlots: builder.mutation({
      query: (payload) => ({
        url: `/slots`,
        method: 'POST',
        body: payload, 
      }),
      invalidatesTags: [{ type: 'Slots', id: 'LIST' }],

    }),
    getAllSlotsFromAdmin: builder.query({
      query: () => ({
        url: `/slots`,
        method: 'GET',
        
      }),
      transformResponse: (response: TResponseRedux<TSlots[]>) => {
        if (response.success) {
          return response.data;
        } else {
          console.error(response.error?.data?.message || 'An error occurred');
          return null; 
        }
      },
      providesTags: [{ type: 'Slots', id: 'LIST' }],
      
    })
  }),
});

export const { useGetAllSlotsQuery, useCreateSlotsMutation,useGetAllSlotsFromAdminQuery } = slotApi;
