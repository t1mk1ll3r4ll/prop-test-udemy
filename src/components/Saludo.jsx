import React from 'react'

const Saludo = (props) => {
    console.log(props)
    return (
        <div>
            <h2>hola {props.persona}</h2>
            <p>{props.persona} tiene {props.edad} años de edad</p>
        </div>
    )
}

export default Saludo
