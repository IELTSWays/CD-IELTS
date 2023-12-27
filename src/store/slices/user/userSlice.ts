import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface UserState {
  [x: string]: any;
  name: any;
  fontSize: any;
  contrast: any;
  currentUser: any;
  permissions: any[];
  listCourses: any[];
  listCoursesStatus: any;
}

const initialState: UserState = {
  name: "ali",
  fontSize: "regular",
  contrast: "BlackWhite",
  currentUser: "demo",
  permissions: [],
  listCourses: [],
  listCoursesStatus: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = [...action.payload].join("");
    },
    setfontSize: (state, action: PayloadAction<string>) => {
      state.fontSize = [...action.payload].join("");
    },
    setcontrast: (state, action: PayloadAction<string>) => {
      state.contrast = [...action.payload].join("");
    },
    setCurrentUser: (state, action: PayloadAction<any[]>) => {
      state.currentUser = [...action.payload];
    },
    setPermissions: (state, action: PayloadAction<any[]>) => {
      state.permissions = [...action.payload];
    },
    setListCourses: (state, action: PayloadAction<any[]>) => {
      state.listCourses = [...action.payload];
    },
    setlistCoursesStatus: (state, action: PayloadAction<any>) => {
      state.listCoursesStatus = action.payload;
    },
  },
});

export const {
  setName,
  setfontSize,
  setcontrast,
  setCurrentUser,
  setPermissions,
  setListCourses,
  setlistCoursesStatus,
} = userSlice.actions;

export const selectName = (state: RootState) => state.user.name;
export const selectFontSize = (state: RootState) => state.user.fontSize;
export const selectContrast = (state: RootState) => state.user.contrast;
export const selectUserPermissions = (state: RootState) =>
  state.user.permissions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectListCourses = (state: RootState) => state.user.listCourses;
export const selectListCoursesStatus = (state: RootState) =>
  state.user.listCoursesStatus;

export default userSlice.reducer;
