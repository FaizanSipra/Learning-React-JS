import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Faizan', age:20})
  const btnClicked = () => { //mostly hota ye ha k jb function run hota ha to variable ki value change hoti ha phir neechy wali line print hoti ha(like code upr se neechy jata ha as usual, lekin useState mein jis mein setVarName ek function ha wo asynchronize way mein chlta ha, iss liye pehle old value print ho jati ha phir value change hoti ha.)
    // print before changing value
    console.log(`Before changing value: ${num}`);
    setNum(20)
    console.log(`After changing value: ${num}`);
    console.log('Done');
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked} className='bg-emerald-900 px-8 py-2 rounded-lg'>Click</button>
    </div>
  )
}

export default App