import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(0) // a is readyonly and setA(a prebuilt function in react useState. a is variable name) is write only
  const [num, setNum] = useState(20)
  const [userName, setUserName] = useState('Faizan')

  function changeNum(){
    setNum(30)
    setUserName('Sipra')
  }

  // counter functionality

  // creating variable
  const [counter, setCounter] = useState(1)

  // functions
  // increase
  const increaseNum = () => {
    setCounter(counter+1)
    console.log(`Value of counter is ${counter}`);
  }

  const decreaseNum = () => {
    setCounter(counter-1)
    console.log(`Value of counter is ${counter}`);
  }
  
  const increase5Num = () => {
    setCounter(counter+5)
    console.log(`Value of counter is ${counter}`);
  }
  
  const decrease5Num = () => {
    setCounter(counter-5)
    console.log(`Value of counter is ${counter}`);
  }
  return (
    <div className='m-10 flex justify-center items-center h-screen w-full'>
      {/* <h2>Value of num is {num} <br/> name of user is {userName}</h2>
      <button onClick={changeNum} className='px-6 py-3 bg-emerald-900 rounded-full'>Click me</button> */}
      <div className=' w-fit'>
        <h1 className='text-9xl text-center rounded-xl px-20 py-10 bg-gray-700 w-full h-full'>{counter}</h1>
        {/* buttons */}
        <div className='grid grid-cols-2 gap-3 mt-5'>
          <button onClick={increaseNum} className='bg-gray-800 px-8 py-2 rounded-full '>Increase</button>
          <button onClick={decreaseNum} className='bg-gray-800 px-8 py-2 rounded-full '>Decrease</button>
          <button onClick={increase5Num} className='bg-gray-800 px-8 py-2 rounded-full '>Increase by 5</button>
          <button onClick={decrease5Num} className='bg-gray-800 px-8 py-2 rounded-full '>Decrease by 5</button>
        </div>
      </div>
    </div>
  )
}

export default App