import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./reducers/counter-reducer"
import authSlice from "./reducers/auth-reducer"

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
})

export default store
