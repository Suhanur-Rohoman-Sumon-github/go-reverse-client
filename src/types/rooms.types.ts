export type TRoomData = {
    _id:string
    name: string
    roomNo: number
    floorNo: number
    capacity: number
    pricePerSlot: number
    amenities: string[]
    image: string
  }

  export type TSingleRoom = {
    image: string
    name: string
    roomNo: number
    floorNo: number
    capacity: number
    pricePerSlot: number
    amenities: string[]
    date:string
  }

  export interface TSlots {
    _id?: string
    room?: TRoomData
    date?: string
    startTime?: number
    endTime: string
    isBooked?: boolean
    __v?: number
  }
  
 
  
  