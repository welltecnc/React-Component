import React from 'react'
import img from './../img/carro.jpg'


export default function Carros(props){


    return(
     <div className='main'>
        <img src={img} className="carro"/>

        <ul type="disc">
            <li>{props.carros[0]}</li>
            <li>{props.carros[1]}</li>
            <li>{props.carros[2]}</li>
            <li>{props.carros[3]}</li>
        </ul>
        </div>
    )
}