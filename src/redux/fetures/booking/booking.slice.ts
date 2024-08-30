import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Update the TBookingState interface with new fields
interface TBookingState {
  slotIds: string[];
  date: string | null;
  room: string | null;
  user: string | null;
}

// Update the initial state with default values for the new fields
const initialState: TBookingState = {
  slotIds: [],
  date: null,  
  room: null,
  user: null, 
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    toggleSlotId(state, action: PayloadAction<string>) {
      const slotId = action.payload;
      if (state.slotIds.includes(slotId)) {
        state.slotIds = state.slotIds.filter(id => id !== slotId);
      } else {
        state.slotIds.push(slotId);
      }
    },
    // Add reducers to handle the new fields
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    
    setRoom(state, action: PayloadAction<string>) {
      state.room = action.payload;
    },
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
});

export const { toggleSlotId, setDate,  setRoom, setUser } = bookingSlice.actions;
export default bookingSlice.reducer;
