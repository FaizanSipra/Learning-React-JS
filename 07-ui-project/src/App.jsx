import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'salmon',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi deleniti commodi possimus, reprehenderit quia?',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1684327596702-6bbbe1422375?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'blue',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi deleniti commodi possimus, reprehenderit quia?',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1525284412981-f7591a441578?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'aqua',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi deleniti commodi possimus, reprehenderit quia?',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1585692614068-032d02167af1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'black',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi deleniti commodi possimus, reprehenderit quia?',
      tag:'Underpayed'
    }
    
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App