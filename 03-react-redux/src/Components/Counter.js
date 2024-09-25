import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './slice/CounterSlice'

const Counter = ()=>{

    const count = useSelector((state) => state.counter.count)
    // Counter is key declared in the store
    // count is variable in the states.
    
    const dispatch = useDispatch()

    return(
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    )

}

export default Counter