import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  isStripe: boolean;
  isPaymentConfirm:boolean
  price:number
}

const initialState: PaymentState = {
    isPaymentConfirm : false,
  isStripe: false,
  price:5
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentMethod(state, action: PayloadAction<string>) {
      state.isStripe = action.payload === "Stripe";
    },
    setIsPaymentConfirm(state, action: PayloadAction<string>) {
      state.isPaymentConfirm = action.payload === "Confirm";
    },
    resetPaymentMethod(state) {
      state.isStripe = true;
    },
    setProductPrice(state, action: PayloadAction<number>) {
     state.price = action.payload
    },
  },
});

export const { setPaymentMethod, resetPaymentMethod,setProductPrice,setIsPaymentConfirm } = paymentSlice.actions;
export default paymentSlice.reducer;