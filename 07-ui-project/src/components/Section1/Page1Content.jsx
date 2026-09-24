import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 gap-10 h-[90vh] flex justify-between items-center px-18'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content