import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [{
            _id: 1,
            title: "I am Title",
            description: "I am Desc"
        }],
        edit: {
            todo: {},
            isEdit: false,
        },
    },
    reducers: {
        // Save Todo
        add: (state, action) => {
            return {
                ...state,
                allTodos: [...state.allTodos, action.payload]
            };
        },
        // Remove Todo
        remove: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.filter((todo) => todo._id !== action.payload)
            };
        },
        // Edit Todo
        edit: (state, action) => {
            return {
                ...state,
                edit: { todo: action.payload, isEdit: true },
            };
        },
        // Update Todo
        update: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                ),
                edit: { todo: {}, isEdit: false },
            };
        },
        // Cancel Edit
        cancelEdit: (state) => {
            return {
                ...state,
                edit: { todo: {}, isEdit: false },
            };
        }
    }
});

export const { add, remove, edit, update, cancelEdit } = todoSlice.actions;
export default todoSlice.reducer;
