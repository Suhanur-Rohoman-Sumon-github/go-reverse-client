import { TResponseRedux, TRoomData,TQueryParams, TSingleRoom } from "../../../types";
import { baseApi } from "../../api/baseApi";
const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoom:builder.mutation({
      query:(payload)=>({
        url:`/rooms`,
        body:payload,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Rooms', id: 'LIST' }],
    }),
    updateRoom:builder.mutation({
      query:({payload,id})=>({
        url:`/rooms/${id}`,
        body:payload,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Rooms', id: 'LIST' }],
    }),
    deleteRooms:builder.mutation({
      query:(id)=>({
        url:`/rooms/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Rooms', id: 'LIST' }],
    }),
    getAllRooms: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args){
            args.forEach((item:TQueryParams) => {
             params.append(item.name,item.value as string)
           });
        }
        return {
          url: `/rooms`,
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
      providesTags: [{ type: 'Rooms', id: 'LIST' }],
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
      providesTags: [{ type: 'Rooms', id: 'LIST' }],
    }),
    
    
  }),
  
});

export const { useGetAllRoomsQuery,useGetSingleRoomQuery,useCreateRoomMutation,useUpdateRoomMutation,useDeleteRoomsMutation } = roomApi;
