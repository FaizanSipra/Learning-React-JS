import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 gap-10 h-[90vh] flex justify-between items-center px-18'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content