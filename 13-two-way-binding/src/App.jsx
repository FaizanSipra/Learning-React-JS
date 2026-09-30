import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e)=> {
    e.preventDefault()
    console.log("Form submitted by " + title)
    setTitle('')
  }
  return (
    <div className='' onSubmit={(e)=> {
      submitHandler(e)
    }}>
      <form className='m-10'>
        <input
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        value={title}
        type="text"
        name=""
        placeholder='Enter your name'
        className='bg-gray-400 px-4 py-3 rounded-tl-full rounded-bl-full text-white placeholder:text-white focus:outline-0' id="" />
        <button className='bg-blue-900 text-white rounded-tr-full rounded-br-full px-4 py-3'>Submit</button>
      </form>
    </div>
  )
}

// hum khud se input mein koi changes nhi kr skty like inserting text or storing text or making textbox emply after submitting
// So input field bnany k baad hum n react k through ek variable bnaya jis ki initial value empty string ha and hum n wo value uss text box ko pass kr di jis ki value hum type/change kren gy. Jb k hum n value pass to kr di text box mein lekin wo hard coded ha(hum n empty string pas kiya tha input mein and wo textbox mein show ho ga and text box mein abhi bhi kuch type krne pr kuch bhi store/visible nhi ho ga textbox k andr. To uss k liye ek logic bnana pry ga. to hum n text box pr onChange ka attribute lga kr ek function with argument run kiya and variable(jo text box k andr as a hard coded value pass kiya tha.) k andr text/store kr diya, jb k text variable mein store ho rha ha to wo text box mein show bhi ho ga because hum n text k andr as a value variable ko pass kiya hua tha. And uss k baad hum n form submit hony pr page reload hony k default behavior ko remove kiya and variable ko empty kr diya.
// This is called 2 way binding. And we will use this when we will work with text boxes.

export default App