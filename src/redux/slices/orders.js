import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { OrdersAPI } from '../../api/orders-api';

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await OrdersAPI.getAllOrders();
  return response;
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.success = true;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default ordersSlice.reducer;
