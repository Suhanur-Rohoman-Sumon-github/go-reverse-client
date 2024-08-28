import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type OrderState = {
    paymentType: string;
  isSubmitted:boolean
};


const initialState: OrderState = {
 paymentType: '',
isSubmitted:false ,
};


const checkOut = createSlice({
  name: 'order',
  initialState,
  reducers: {
   
    updatePaymentType(state, action: PayloadAction<string>) {
      state.paymentType = action.payload;
    },
    
    updateIsSubmitted(state, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
  },
});


export const {  updatePaymentType, updateIsSubmitted } = checkOut.actions;
export default checkOut.reducer;