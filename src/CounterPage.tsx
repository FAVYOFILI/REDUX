import { useDispatch, useSelector } from "react-redux";
import { CounterSlice } from "./CounterSlice";


function Counter() {
    const count = useSelector((state: {counter: {value: number}}) => state.counter.value)
const dispatch = useDispatch();

return (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(CounterSlice.actions.increment())}></button>
    <button onClick={() => dispatch(CounterSlice.actions.decrement())}></button>
  </div>
);
}

export default Counter

