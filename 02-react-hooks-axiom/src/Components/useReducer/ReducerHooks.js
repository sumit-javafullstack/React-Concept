import { useReducer } from "react";


const InitialState = {
    count:0,
    age:30,
    salary:20000
}

const reducer = (state,action)=>{

    switch(action.type){

        case 'INCREMENT':
            return {...state,count: state.count + 10}
        case 'DECREMENT':
            return {...state, count: state.count -5}
        case 'INCREASE_AGE':
            return {...state, age: action.payload}
        case 'DECREASE_SALARY':
            return {...state, salary: action.payload}
        case 'DECREASE_AGE_INCREASE_SALARY':
            return {...state,...action.payload}
        case 'RESET':
            return InitialState;
    }

}
const ReducerHooks = ()=>{

    const[ state , dispatch ] = useReducer(reducer,InitialState)

    return (
        <div>
             <h1>Counter: {state.count}</h1>
             <h1>age: {state.age}</h1>
             <h1>salary: {state.salary}</h1>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=> dispatch({type:'INCREASE_AGE', payload: state.age + 30})}>Age</button>
            <button onClick={()=> dispatch({type:'DECREASE_SALARY',payload:state.salary - 1500})}>Salary</button>
            <button onClick={()=> dispatch({type:'DECREASE_AGE_INCREASE_SALARY', payload : {age: state.age + 30 , salary: state.salary - 1500}})}>Age and Salary</button>
            <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
        </div>

    )
}

export default ReducerHooks;