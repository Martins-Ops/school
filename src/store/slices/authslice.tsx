import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: initialState = {
  
  token: null,
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState:initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});



export const { setToken, setIsLoggedIn } = authSlice.actions;

export default authSlice.reducer;
