import React from 'react'

const Card = (props) => { // props data will be received in form of object

    console.log(props)
    return (
        <div className="card">
            <img src={props.profile_pic} alt="thumbnail" />
            <h1>{props.user}, {props.age}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, blanditiis?</p>
            <button>Click me!</button>
        </div>
    )
}

export default Card