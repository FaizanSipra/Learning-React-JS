import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Faizan', age:20})
  const [num2, setNum2] = useState([10,20,30])
  const btnClicked = () => { //mostly hota ye ha k jb function run hota ha to variable ki value change hoti ha phir neechy wali line print hoti ha(like code upr se neechy jata ha as usual, lekin useState mein jis mein setVarName ek function ha wo asynchronize way mein chlta ha, iss liye pehle old value print ho jati ha phir value change hoti ha.)
    // print before changing value

    // console.log(`Before changing value: ${num}`);
    // setNum(20)
    // console.log(`After changing value: ${num}`);
    // console.log('Done');


    // objects & arrays are reference variables

    // const newNum = {...num} // saving num objects's data in newNum object
    // newNum.user = 'Sipra'
    // setNum(newNum)
    // console.log(newNum);
    const newNum2 = [...num2]
    // newNum2.push(80)
    // setNum2(newNum2)
    console.log(newNum2);
  }

  const [num3, setNum3] = useState({user: 'Faizan', age: 23})

  const btnClicked2 = () => {
    const newNum = {...num3}
    // newNum.user = 'Sipra'
    // setNum3(prev=>({...prev,age:32})) // when writing prev React gives us previous/current state automatically. ...prev copies the object
    setNum3(prev=>({...prev, user:'Sipra'}))
    console.log(newNum)
  }

  // setNum3(prev=>(prev+1))


  
  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      {/* <h1>{num2}</h1> */}
      <h1>{num3.user}, {num3.age}</h1>
      {/* <button onClick={btnClicked} className='bg-emerald-900 px-8 py-2 rounded-lg'>Click</button> */}
      <button onClick={btnClicked2} className='bg-emerald-900 px-8 py-2 rounded-lg'>Click</button>
    </div>
  )
}

export default App