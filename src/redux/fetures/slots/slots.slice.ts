import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TBookingState {
  slotId: string[];
  
}

const initialState: TBookingState = {
    slotId : [],
  
};

const bookingSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setSlotsId(state, action: PayloadAction<string>) {
      state.slotId = [...state.slotId,action.payload];
    },
  
  },
});

export const { setSlotsId} = bookingSlice.actions;
export default bookingSlice.reducer;