import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "./profileTypes";

interface ProfileState {
  profiles: Profile[];
}

const initialState: ProfileState = {
  profiles: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfiles(state, action: PayloadAction<Profile[]>) {
      state.profiles = action.payload;
    },
  },
});

export const { setProfiles } = profileSlice.actions;
export default profileSlice.reducer;
