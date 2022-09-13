import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'toDo',
    initialState: {
      todoList:   [
        { id: 1, content: "Task 1" },
        { id: 2, content: "Task 2"}
      ]
    },
    reducers: {
      addToDo: (state, action) => {
        let newTodoList = {
          id: Math.random(),
          content: action.payload?.newContent
        }
        state.todoList.push(newTodoList);
      },
      deleteToDo: (state, action) => {
        let { todoList } = state;
        state.todoList = todoList.filter((item) => 
            item.id !==action.payload);
      },
      editTodo: (state, action) => {
        let { todoList } = state;
        state.todoList = todoList.map((item) => 
          item.id === action.payload.id ? action.payload : item);
      }
     },
})

export const { addToDo, deleteToDo, editTodo } = todoSlice.actions
export default todoSlice.reducer;