import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface NavState {
  showNavbar: boolean;
}

// Define the initial state using that type
const initialState: NavState = {
  showNavbar: false,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setShowNavbar: (state, action: PayloadAction<boolean>) => {
      state.showNavbar = action.payload;
    },
  },
});

export const { setShowNavbar } = navSlice.actions;
export default navSlice.reducer;
