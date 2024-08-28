import { TResponseRedux, TRoomData } from "../../../types";
import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        
        if (args) {
          params.append('roomId', args);
        }

        return {
          url: `/slots/availability`,
          method: 'GET',
          params: params
        };
      },
      transformResponse: (response: TResponseRedux<TRoomData[]>) => {
        if (response.success) {
          return response.data || [];
        } else {
          console.error(response.error?.data?.message || 'An error occurred');
          return [];
        }
      },
    }),
    createSlots: builder.mutation({
      query: (payload) => ({
        url: `/slots`,
        method: 'POST',
        body: payload, 
      }),
      transformResponse: (response: TResponseRedux<TRoomData>) => {
        if (response.success) {
          return response.data;
        } else {
          console.error(response.error?.data?.message || 'An error occurred');
          return null; 
        }
      },
    })
  }),
});

export const { useGetAllSlotsQuery, useCreateSlotsMutation } = slotApi;
