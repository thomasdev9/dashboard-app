import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CustomersAPI } from '../../api/customers-api';

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await CustomersAPI.getAllCustomers();
  return response;
});

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.success = true;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default customersSlice.reducer;
