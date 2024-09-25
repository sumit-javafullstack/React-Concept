import { useState } from 'react'
import './Counter.css'
import Card from './Card';

let totalcount=0;
const Counter = ({getTotalCountFromChild}) =>{
    const[counter,updateCounter] = useState(0)
    
    
    const inputHandler = (event) =>{
        updateCounter(event.target.value)
    }
    const incrementHandler = () =>{
        totalcount = totalcount + 1;
        updateCounter(counter + 1)
    }

    const decrementHandler = () => {
        totalcount = totalcount + 1;
        updateCounter(counter - 1)
    }

    const totalClickHandler = () =>{
        console.log(totalcount)
        getTotalCountFromChild(totalcount)
        
    }
    return (
        <Card className='expense-date'>
        <div>
            <button className='Button' onClick={incrementHandler}> Increment </button>
            <input className='Input' type='number'  value={counter} onChange={inputHandler} onBlur={totalClickHandler}></input>
            <button className='Button' onClick={decrementHandler}> Decrement </button>
        </div>
        </Card>
    )
}

export default Counter;








