import { configureStore } from "@reduxjs/toolkit";
import reactionReducer from "@/app/features/reactionslice";

const store = configureStore({
  reducer: { reactionReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
