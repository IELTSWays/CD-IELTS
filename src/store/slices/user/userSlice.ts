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
  currentQuestion: number;
  answersOld: any;
  answersAll: any;
  testInfo: any;
  writingSaved: any;
  accordion: any;
  flag: any;
  cart: any
}

const initialState: UserState = {
  name: "ali",
  fontSize: "regular",
  contrast: "BlackWhite",
  currentUser: "demo",
  permissions: [],
  listCourses: [],
  listCoursesStatus: "",
  currentQuestion: 1,
  answersOld: {},
  answersAll: {},
  testInfo: {},
  writingSaved: "",
  accordion: "",
  flag: {
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    "10": null,
    "11": null,
    "12": null,
    "13": null,
    "14": null,
  },
  cart: []
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
    setCurrentQuestion: (state, action: PayloadAction<any>) => {
      state.currentQuestion = action.payload;
    },
    setAnswersOld: (state, action: PayloadAction<any>) => {
      state.answersOld = action.payload;
    },
    setAnswersAll: (state, action: PayloadAction<any>) => {
      state.answersAll = { ...action.payload };
    },
    setTestInfo: (state, action: PayloadAction<any>) => {
      state.testInfo = { ...action.payload };
    },
    setWritingSaved: (state, action: PayloadAction<string>) => {
      state.writingSaved = [...action.payload].join("");
    },
    setAccordion: (state, action: PayloadAction<string>) => {
      state.accordion = [...action.payload].join("");
    },
    setFlags: (state, action: PayloadAction<any>) => {
      state.flag = { ...action.payload };
    },
    setCart: (state, action: PayloadAction<any>) => {
      state.cart = { ...action.payload };
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
  setCurrentQuestion,
  setAnswersOld,
  setAnswersAll,
  setTestInfo,
  setWritingSaved,
  setAccordion,
  setFlags,
  setCart
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
export const selectCurrentQuestion = (state: RootState) =>
  state.user.currentQuestion;
export const selectAnswersOld = (state: RootState) => state.user.answersOld;
export const selectAnswersAll = (state: RootState) => state.user.answersAll;
export const selectTestInfo = (state: RootState) => state.user.testInfo;
export const selectWritingSaved = (state: RootState) => state.user.writingSaved;
export const selectAccordion = (state: RootState) => state.user.accordion;
export const selectFlags = (state: RootState) => state.user.flag;
export const selectCart = (state: RootState) => state.user.cart;

export default userSlice.reducer;
