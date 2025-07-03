import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'todo 1' }],
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;


