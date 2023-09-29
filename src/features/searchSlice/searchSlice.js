import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   search: 'Cars',
   page: 1
}

function getStateFromLS() {
   return JSON.parse(localStorage.getItem("search")) || initialState
}

const searchSlice = createSlice({
   name: "search",
   initialState: getStateFromLS(),
   reducers: {
      changeSearch: (state, action) => {
         state.search = action.payload.search
         state.page = action.payload.page
         localStorage.setItem("search", JSON.stringify(state))
      }
   }
})

export default searchSlice.reducer
export const { changeSearch } = searchSlice.actions