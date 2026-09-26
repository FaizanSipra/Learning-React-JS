import React from 'react'

const App = () => {
  function inputChanging(val) { // ye val parameter text box k type ko catch kr rha ha and phir uss value ko console.log bhi kiya ja skta ha.
    console.log(val)
  }

  const pageScrolling = (elem) => {
    if(elem>0){
      console.log("seedha scrolling")
    } else {
      console.log("oolta scrolling")      
    }
  }

  return (
    <div className='m-10'>
      <div>
        <input
          onChange={(elem) => {
            inputChanging(elem.target.value) // function call hoty time text box mein jo bhi type ho rha ha usko track kiya ja rha ha
          }}
          className='bg-gray-300 py-3 px-8 rounded-full'
          type="text" name=""
          placeholder='Enter some text'
          id=""
        />
        <button onClick={() => {
          console.log('Button clicked through arrow function')
        }} className='bg-gray-800 text-white px-8 py-3 rounded-full cursor-pointer'>Click me</button>
      </div>

      {/* page 1 */}
      <div onWheel={(elem)=> {
        pageScrolling(elem.deltaY)
      }}>
        <div className='w-full h-screen bg-gray-600'></div>
        <div className='w-full h-screen bg-emerald-900'></div>
        <div className='w-full h-screen bg-red-950'></div>
      </div>
    </div>
  )
}

export default App