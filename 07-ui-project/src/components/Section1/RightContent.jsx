import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users.intro)
  
  return (
    <div id='right' className=' h-full w-2/3 p-6 overflow-x-auto flex gap-10 flex-nowrap'>
      {props.users.map(function(elem, idx){
        return <RightCard color={elem.color} key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent