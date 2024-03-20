import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../REDUX/counterSlice'

function Counter() {
    const [range,setRange] = useState("")
    //hook - useDispatch()
    const dispatch = useDispatch()

    //hook - useSelector() - to access state in store 
    const count = useSelector((state)=>state.counter.value) //state.reducer.value

    return (
        <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>
            <div style={{ width: '400px', height: '500px' }} className='shadow border rounded border-primary p-5 '>
                <h3 className='text-center text-primary mt-5'>Counter Application</h3>
                <h1 className='text-center mt-4' style={{ fontSize: '100px' }}>{count}</h1>
                <div className='mt-5 d-flex justify-content-evenly'>
                    <button className='btn btn-success' onClick={()=>dispatch(increment(Number(range)))}>increment</button>
                    <button className='btn btn-danger' onClick={()=>dispatch(reset())}>reset</button>
                    <button className='btn btn-warning' onClick={()=>dispatch(decrement(Number(range)))}>decrement</button>
                </div>
                <input className='form-control mt-4' type="text" placeholder='range' onChange={(e)=>setRange(e.target.value)} />
                
            </div>
        </div>
    )
}

export default Counter
