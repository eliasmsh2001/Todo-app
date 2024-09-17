import { createSlice } from "@reduxjs/toolkit";
import initialStateData from "./initialStateData";

const todosSlicer = createSlice({
  name: "todo",
  initialState: {
    todos: initialStateData,
    filter: "all",
    theme: "light",
  },
  reducers: {
    onAddTodo(state, action) {
      const newTodo = action.payload;
      const existingItem = state.todos.find(
        (item) => item.todoTitle === newTodo.title
      );
      if (!existingItem) {
        state.todos.push({
          todoId: newTodo.title,
          todoTitle: newTodo.title,
          completed: false,
        });
      }
    },
    onToggleCheckTodo(state, action) {
      const itemId = action.payload;
      const existingItem = state.todos.findIndex(
        (item) => item.todoTitle === itemId
      );
      state.todos[existingItem].completed =
        !state.todos[existingItem].completed;
      state.completedTodos = state.todos.filter((item) => item.completed);
    },
    onClearCompleted(state) {
      state.todos = state.todos.filter((item) => !item.completed);
    },
    onShowAll(state) {
      state.filter = "all";
    },
    onShowCompleted(state) {
      state.filter = "completed";
    },
    onShowActive(state) {
      state.filter = "active";
    },
    onDeleteTodo(state, action) {
      const id = action.payload;
      const existingTodo = state.todos.findIndex((todo) => todo.todoId === id);
      state.todos.splice(existingTodo, 1);
    },
    onDragAndDrop(state, action) {
      const object = action.payload;
      const temp = state.todos[object.start];
      state.todos[object.start] = state.todos[object.end];
      state.todos[object.end] = temp;
    },
    onToggleTheme(state) {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
    },
  },
});

export default todosSlicer;
export const todoActions = todosSlicer.actions;
