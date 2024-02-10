import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [specialCharactersAllowed, setSpecialCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numbersAllowed) str += "0123456789"
    if (specialCharactersAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numbersAllowed, specialCharactersAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, specialCharactersAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl font-bold mb-4 text-center text-white my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordref}
          />
          <button
          onClick={copyPasswordToClipBoard}
          className='bg-blue-500 text-white px-3 py-0.5 outline-none shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={5}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={numbersAllowed}
            onChange={() => {setNumbersAllowed((prev) => !prev)}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={specialCharactersAllowed}
            onChange={() => {setSpecialCharactersAllowed((prev) => !prev)}}
            />
            <label htmlFor='specialCharactersInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
