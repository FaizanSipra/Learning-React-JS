import React, { useState } from 'react'

const App = () => {


  // note title variable
  const [noteTitle, setNoteTitle] = useState('')
  // note detail's variable
  const [noteDetail, setNoteDetail] = useState('')

  // Form submission logics
  const submitHandler = (e) => {
    // preventing default behavior(page reload)
    e.preventDefault()
    // emptying note title textbox after form submission
    setNoteTitle('')
    // emptying note detail textbox after form submission
    setNoteDetail('')
    console.log('Note submitted with title: ' + noteTitle)
    console.log(`Note detail is: ${noteDetail}`);

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='p-10 flex items-start lg:w-1/2 flex-col gap-4'>
        <h1 className='text-xl lg:text-4xl font-bold'>Add Notes</h1>
        {/* Note title  */}
        <input
          value={noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value)
          }}
          className='px-5 py-2 w-full  rounded border font-medium focus:ring-2 focus:ring-white transition-all duration-300 ease-in-out focus:outline-none'
          type="text"
          placeholder='Enter Notes Title' />
        {/* Note Detail */}
        <textarea
          value={noteDetail}
          onChange={(e) => {
            // inserting data in form detail variable
            setNoteDetail(e.target.value)
          }}
          className='px-5 py-2 w-full  rounded border font-medium focus:ring-2 focus:ring-white transition-all duration-300 ease-in-out focus:outline-none h-32'
          type="text"
          placeholder='Enter Notes Details' />
        {/* Submit button */}
        <button className='px-5 w-full py-2 rounded border font-medium border-white transition-all duration-400 ease-in-out hover:bg-black cursor-pointer hover:text-white text-black bg-white'>Add Note</button>
      </form>
      {/* div that will display notes */}
      <div className='p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-xl lg:text-4xl font-bold'>Recent Notes</h1>
        {/* div that is holding the notes */}
        <div className='flex mt-5 h-full overflow-auto flex-wrap gap-5'>
          <div className='h-50 w-40 rounded-2xl bg-white'></div>
          <div className='h-50 w-40 rounded-2xl bg-white'></div>
          <div className='h-50 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App