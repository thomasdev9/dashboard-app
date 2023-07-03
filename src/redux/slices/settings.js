import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SettingsAPI } from '../../api/settings-api';

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

export const fetchSettings = createAsyncThunk('settings/fetchSettings', async () => {
  const response = await SettingsAPI.getSettings();
  return response;
});

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSettings.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.success = true;
    });
    builder.addCase(fetchSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default settingsSlice.reducer;
