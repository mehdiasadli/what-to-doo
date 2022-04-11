import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  todos: [],
  isLoading: false,
  error: ''
}

export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async () => {
      try {
          const response = await axios.get('https://what-to-doo.herokuapp.com/api/todos/')
          return response.data
      } catch (error) {
          return error
      }
  }
)
export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (newTodo) => {
        try {
          const res = await axios.post('https://what-to-doo.herokuapp.com/api/todos/', newTodo)
          return res.data
        } catch (error) {
          return error
        }
    }
)
export const deleteAll = createAsyncThunk(
    'todos/deleteAll',
    async () => {
        try {
          const res = await axios.delete('https://what-to-doo.herokuapp.com/api/todos/')
          return res.data
        } catch (error) {
          return error
        }
    }
)
export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (id) => {
        try {
          const todo = await axios.get('https://what-to-doo.herokuapp.com/api/todos/' + id)
          const res = await axios.put('https://what-to-doo.herokuapp.com/api/todos/' + id, { isDone: !todo.data.isDone })
          return res.data
        } catch (error) {
          return error
        }
    }
)

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    [getAllTodos.pending]: (state, action) => {
        state.isLoading = true
    },
    [getAllTodos.fulfilled]: (state, action) => {
        state.isLoading = false
        state.todos = action.payload
    },
    [getAllTodos.rejected]: (state, action) => {
        state.isLoading = false
        state.error = action.payload
    },
    [addTodo.fulfilled]: (state, action) => {
        state.isLoading = false
        state.todos = [...state.todos, action.payload]
    },
    [deleteAll.fulfilled]: (state, action) => {
        state.isLoading = false
        state.todos = []
    },
    [deleteAll.rejected]: (state, action) => {
        state.isLoading = false
        state.error = action.payload
    },
    [updateTodo.pending]: (state, action) => {
        state.isLoading = true
    },
    [updateTodo.fulfilled]: (state, action) => {
        state.isLoading = false
        state.todos = action.payload
    },
    [updateTodo.rejected]: (state, action) => {
        state.isLoading = false
        state.error = action.payload
    },
}
})

// Action creators are generated for each case reducer function
// export const {  } = todosSlice.actions

export default todosSlice.reducer