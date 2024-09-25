import { useEffect, useState } from 'react';
import './UseEffectBasic.css'
import ConsumerContext from '../useContext/ConsumerContext';

const UseEffectBasic = () =>{

    

    const[counter1,setcounter1] = useState(0)

    const[counter2,setcounter2] = useState(0)

    // useEffect(() =>{

    //     console.log('Inside useEffect only method')
    // })

    // useEffect(() =>{

    //     console.log('Inside useEffect with empty []')
    // },[])

    useEffect(() =>{

        console.log('Inside useEffect with [counter1]')
    },[counter1])

    useEffect(() =>{

        console.log('Inside useEffect with [counter2]')
    },[counter2])

    console.log('Outside useEffect')

    const counter2Handler = () =>{
        setcounter2(counter2+1)
    }

    const counter1Handler = () =>{
        setcounter1(counter1+1)
    }

    return (
        <div className='UseEffectBasic'>
            
            <h2> Inside UseEffectBasic</h2>
            <button onClick={counter1Handler}>Counter1</button>
            <button onClick={counter2Handler}>Counter2</button>
            <ConsumerContext />
        </div>
    )

}


export default UseEffectBasic;