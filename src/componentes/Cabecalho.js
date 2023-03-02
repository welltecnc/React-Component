import React from 'react'

export default function Cabecalho(props){

return(
    <header className='headerC'>
        <h1>{props.tituloCab}</h1>
        <p>{props.parag}</p>
    </header>
)
}