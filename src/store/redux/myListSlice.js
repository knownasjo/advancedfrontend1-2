import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    setMyList(state, action) {
      return action.payload
    },
    addItem(state, action) {
      state.push(action.payload)
    },
    updateItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id)
      if (index !== -1) state[index] = action.payload
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { setMyList, addItem, updateItem, removeItem } = myListSlice.actions
export default myListSlice.reducer
