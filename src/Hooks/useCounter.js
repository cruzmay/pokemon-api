import { useState } from 'react'

export const useCounter = (initialState = 20) => {
   const [counter, setCounter] = useState(initialState)

    const reset = () => {
        setCounter(initialState)
    }

    const increment = () => {
        setCounter(counter + 20)
    }
    const decrement = () => {
        setCounter(counter - 20 )
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}