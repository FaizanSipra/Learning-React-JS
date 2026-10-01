import React, { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {


  // note title variable
  const [noteTitle, setNoteTitle] = useState('')
  // note detail's variable
  const [noteDetail, setNoteDetail] = useState('')
  // array that will store notes
  const [task, setTask] = useState([])

  // Form submission logics
  const submitHandler = (e) => {
    // preventing default behavior(page reload)
    e.preventDefault()

    console.log('Note submitted with title: ' + noteTitle)

    console.log(`Note detail is: ${noteDetail}`);

    const copyTask = [...task]

    copyTask.push({ noteTitle, noteDetail })

    setTask(copyTask)
    console.log(copyTask)

    console.log("Note has been added to the array")


    // emptying note title textbox after form submission
    setNoteTitle('')

    // emptying note detail textbox after form submission
    setNoteDetail('')

  }

  // delete note function
  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='p-10 flex items-start lg:w-1/2 flex-col gap-4'>
        <h1 className='text-xl lg:text-4xl font-bold'>Add Notes</h1>
        <h1 className='text-xl lg:text-4xl font-bold text-white'>{task.noteTitle}</h1>
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
        <button className='px-5 w-full py-2 rounded border font-medium border-white transition-all duration-400 ease-in-out hover:bg-black cursor-pointer hover:text-white active:scale-95 text-black bg-white'>Add Note</button>
      </form>
      {/* div that will display notes */}
      <div className='p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-xl lg:text-4xl font-bold'>Recent Notes</h1>
        {/* div that is holding the notes */}
        <div className='flex mt-5 h-full overflow-auto flex-wrap gap-5'>
          {task.map((elem, idx) => {
            return <div key={idx} className='h-50 w-40 relative flex flex-col justify-between rounded-2xl text-black p-5 bg-fit bg-center bg-[url("https://images.rawpixel.com/dark_image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA0YmF0Y2gyLWVsZW1lbnQtMDM1LnBuZw.png")]'>
              <div>
                <h3 className='leading-tight font-bold text-xl'>{elem.noteTitle}</h3>
                <p className='text-gray-600 font-medium text-sm leading-tight mt-4'>{elem.noteDetail}</p>
              </div>
              <button onClick={()=> {
                deleteNote(idx)
              }} className='bg-red-500 w-full text-xs text-white py-1 rounded cursor-pointer active:scale-90'>Delete Note</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App