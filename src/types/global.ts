

import { BaseQueryApi } from "@reduxjs/toolkit/query"
import React from "react"

export type TError ={
    data:{
        message:string
        stack:string
        success:boolean
    }
    status:number
}

export type TMeta = {
    limit:number
    page:number
    total:number
    totalPage:number
}

export type TResponse<T> = {
success:boolean
message:string
data?:T
error?:TError
meta?:TMeta
}

export type TQueryParams ={
    name:string
    value:boolean | React.Key
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi