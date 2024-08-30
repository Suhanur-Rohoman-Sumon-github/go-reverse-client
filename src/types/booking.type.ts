export  type TBookings = {
    roomName: string;
    dateTime: string;
    status: string;
    
  };

 export type TMyBookings = {
    _id: string; 
    date?: string; 
    isConfirmed: string; 
    isDeleted: boolean
    room: {
      _id: string; 
      name: string; 
    };
    slots: {
      _id: string; 
      date: string;
      startTime: string;
      endTime: string; 
      isBooked: boolean; 
      room: string; 
    }[];
    totalAmount: number; 
    createdAt: string; 
    updatedAt: string; 
    user: {
      _id: string; 
 
    };
  };

 export type TBookingData = {
    _id: string;
    totalAmount: number;
    isConfirmed: string;
    date?:string
    room: {
      _id: string;
      name: string;
    };
    user: {
      _id: string;
      name: string;
    };
    slots: {
      _id: string;
      startTime: string;
      endTime: string;
      isBooked: boolean;
      
    }[];
  }
  