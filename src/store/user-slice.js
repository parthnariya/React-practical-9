import { createSlice } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false || JSON.parse( localStorage.getItem("user"))?.isLoggedIn,
    profilePicture: null,
    name: "",
    email: "",
    phone: "",
    password: "",
  },
  reducers: userReducer
  
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
