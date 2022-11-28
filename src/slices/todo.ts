import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  todoList: Array<string>;
}

const initialState: InitialState = {
  todoList: ["todo..."],
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //1. state -> 當下狀態
    //2. action -> 對應的動作
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    addTimestamp: (state) => {
      state.todoList.push(Date.now().toString());
    },
  },
});

export const { addTodo, addTimestamp } = todoSlice.actions;

export default todoSlice.reducer;
