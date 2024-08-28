import { TResponseRedux, TRoomData,TQueryParams } from "../../../types";
import { baseApi } from "../../api/baseApi";
const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    }),
  }),
});

export const { useGetAllRoomsQuery } = roomApi;
