import React from 'react'

const App = () => {

  const submitHandler = (e)=> {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div className='' onSubmit={(e)=> {
      submitHandler(e)
    }}>
      <form className='m-10'>
        <input type="text" name="" placeholder='Enter your name' className='bg-gray-400 px-4 py-3 rounded-tl-full rounded-bl-full text-white placeholder:text-white focus:outline-0' id="" />
        <button className='bg-blue-900 text-white rounded-tr-full rounded-br-full px-4 py-3'>Submit</button>
      </form>
    </div>
  )
}

export default App