import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface UserState {
  [x: string]: any;
  questions: any;
}

const initialState: UserState = {
  questions: '',
};

export const ieltsSlice = createSlice({
  name: "ielts",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<string>) => {
      state.questions = [...action.payload].join("");
    },
  },
});

export const { setQuestions } = ieltsSlice.actions;

export const selectQuestions = (state: RootState) => state.ielts.questions;

export default ieltsSlice.reducer;
