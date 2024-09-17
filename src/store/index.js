import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./reducers/counter-reducer"

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

export default store
