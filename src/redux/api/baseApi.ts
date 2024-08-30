import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { logOut, setUser } from '../fetures/auth/auth.slice'

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000/api',
    credentials:"include",
    prepareHeaders:(heders,{getState})=>{
        const token =  (getState() as RootState).auth.token 
        if(token){
            heders.set('authorization', `Bearer ${token}` )
        }

    }
 })

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const baseQueryWitheRefreshToken:BaseQueryFn<FetchArgs,BaseQueryApi ,DefinitionType > = async (arg,api,extraOptions):Promise<any> =>{
 let result = await baseQuery(arg,api,extraOptions)
 if(result?.error?.status === 401){
    console.log('sending refresh token');
    const res = await fetch('http://localhost:5000/api/auth/refresh-token',{
       method:'POST',
       credentials:'include'
    })
    const data = await res.json()
   if(data?.data?.accessToken){
    const user =  (api.getState() as RootState).auth.user 
    api.dispatch(setUser({user,
       token: data.data.accessToken
    }))
   }else{
    api.dispatch(logOut())
   }
    result = await baseQuery(arg,api,extraOptions)
 }
 return result

 }


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery:baseQueryWitheRefreshToken ,
    endpoints: () => ({}),
    tagTypes: ["Room","Slots","Bookings"],
})