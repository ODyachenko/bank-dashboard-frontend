import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface SettingsState {
  activeTab: number;
}

// Define the initial state using that type
const initialState: SettingsState = {
  activeTab: 0,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = settingsSlice.actions;
export default settingsSlice.reducer;
