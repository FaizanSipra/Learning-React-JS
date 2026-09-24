import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.intro)
    return (
        <div className='h-full w-80 shrink-0 relative rounded-4xl overflow-hidden bg-amber-200'>
            <img className='w-full h-full object-cover' src={props.img} alt="" />
            <RightCardContent color={props.color} id={props.id} intro={props.intro} tag={props.tag}/>
        </div>
    )
}

export default RightCard