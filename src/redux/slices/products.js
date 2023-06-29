import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsAPI } from '../../api/products-api';

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await ProductsAPI.getAllProducts();
  return response;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.success = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
