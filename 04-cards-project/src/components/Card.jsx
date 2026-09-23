import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div>
          {/* top */}
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={12} /></button>
        </div>
        {/* center */}
        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.role}</h2>
          <div className='tag'>
            <h4>{props.firstTag}</h4>
            <h4>{props.secondTag}</h4>
          </div>
        </div>
        </div>
        {/* bottom */}
        <div className="bottom">
            <div>
              <h3>{props.salary}</h3>
              <p>{props.loca}</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card