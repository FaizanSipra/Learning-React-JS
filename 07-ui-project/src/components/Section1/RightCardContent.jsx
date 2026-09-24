import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute w-full h-full p-8 flex justify-between flex-col  top-0 left-0'>
            <h2 className='bg-white w-12 rounded-full flex justify-center items-center font-semibold text-2xl h-12'>{props.id+1}</h2>
            {/* buttons */}
            <div>
                <p className='text-xl text-shadow-2xs text-white mb-14 leading-relaxed'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white px-8 py-2 rounded-full font-medium'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white px-3 py-2 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent