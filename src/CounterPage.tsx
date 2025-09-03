import { useDispatch, useSelector } from "react-redux";
import { CounterSlice } from "./CounterSlice";


function Counter() {
    const count = useSelector((state: {counter: {value: number}}) => state.counter.value)
    const dispatch = useDispatch();

return (
  <div className="grid grid-cols-1 justify-between gap-4">
    <h1>Counter: {count}</h1>
    <button
      onClick={() => dispatch(CounterSlice.actions.increment())}
      className="bg-amber-900 h-[30px] w-[70px] rounded justify-center items-center"
    >
      +
    </button>
    <button
      onClick={() => dispatch(CounterSlice.actions.decrement())}
      className="bg-green-900 h-[30px] w-[70px] rounded justify-center items-center"
    >
      -
    </button>
    <button
      onClick={() => dispatch(CounterSlice.actions.reset())}
      className="bg-red-900 h-[30px] w-[70px] rounded justify-center items-center"
    >
      Reset
    </button>
    <button
      onClick={() => dispatch(CounterSlice.actions.incrementByAmount(5))}
      className="bg-red-900 h-[30px] w-[70px] rounded justify-center items-center"
    >
      5
    </button>
  </div>
);
}

export default Counter

