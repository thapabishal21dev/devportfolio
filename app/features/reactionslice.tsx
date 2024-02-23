import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IReactions {
  like: number;
  wow: number;
  love: number;
  rocket: number;
  cup: number;
}

const initialState: IReactions = {
  like: 7,
  wow: 4,
  love: 2,
  rocket: 1,
  cup: 11,
};

export const reactionSlice = createSlice({
  name: "reaction",
  initialState,
  reducers: {
    IncrementLike: (state, action: PayloadAction<number>) => {
      state.like = action.payload;
    },
    IncrementWow: (state, action: PayloadAction<number>) => {
      state.wow = action.payload;
    },
    Incrementlove: (state, action: PayloadAction<number>) => {
      state.love = action.payload;
    },
    IncrementRocket: (state, action: PayloadAction<number>) => {
      state.rocket = action.payload;
    },
    IncrementCup: (state, action: PayloadAction<number>) => {
      state.cup = action.payload;
    },
  },
});

export const {
  IncrementLike,
  IncrementWow,
  Incrementlove,
  IncrementRocket,
  IncrementCup,
} = reactionSlice.actions;

export default reactionSlice.reducer;
