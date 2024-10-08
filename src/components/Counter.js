import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "../store/reducers/counter-reducer"

import classes from "./Counter.module.css"

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const incrementByFiveHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={incrementByFiveHandler}>Increment by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
