import React from 'react'

export default function Parceiros(props){


    return(
        <div className='parceiros'>
        
        <h2>{props.parce}</h2>
        <span>{props.total}</span><br></br>
        <a href={props.link}>Link</a>
        </div>
       

    )
}