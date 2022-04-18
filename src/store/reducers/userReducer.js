const userReducer = {
    login(state, { payload }) {
      state.isLoggedIn = true;
      state.profilePicture = payload.profilePicture;
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.password = payload.password;
      localStorage.setItem("user", JSON.stringify({ isLoggedIn : true ,name:payload.name,phone:payload.phone,email:payload.email }));
    },
    logout(state) {
      state.isLoggedIn = false;
      // console.log(state)
      localStorage.clear();
    },
    setUser(state, { payload }) {
      state.isLoggedIn = true;
      state.profilePicture = payload.profilePicture;
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.password = payload.password;
    },
  }
export default userReducer