import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "./slices/user/userSlice"
import ieltsReducer from "./slices/user/ieltsSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    ielts: ieltsReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
