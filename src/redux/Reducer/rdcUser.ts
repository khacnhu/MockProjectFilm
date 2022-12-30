import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/Store";

interface UserState {
  id: Number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

interface State {
    lsUsers: Array<UserState>;

}


const initialState:State = {
    lsUsers: [] || null
};
export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    AddUser: (state: State = initialState, action: PayloadAction<any>) => {
      state.lsUsers = action.payload;
    },
    //   decrement: state => {
    //     state.value -= 1
    //   },
    // Use the PayloadAction type to declare the contents of `action.payload`
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   }
  },
});

export const { AddUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
