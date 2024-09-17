import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reducers/counter-reducer"
import authReducer from "./reducers/auth-reducer"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})

export default store
