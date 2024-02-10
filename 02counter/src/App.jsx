import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const incrementValue = () => {
    // counter = counter + 1
    if(counter === 20) {
      return
    }
    else{
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
    }
    
  }

  const decrementValue = () => {
    // counter = counter - 1
    if(counter === 0) {
      return
    }
    else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={incrementValue}>
        Increment value
      </button>

      <br />

      <button onClick={decrementValue}>
        Decrement value
      </button>

    </>
  )
}

export default App
