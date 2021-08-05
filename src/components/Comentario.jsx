import React from 'react'
import Imagen from './Imagen'

const Comentario = (props) => {
    return (
        <div className="d-flex">
            <Imagen img={props.img}/> 
            <div className="flex-grow-1 ms-3">
                <h5 className="mt-0">{props.nombre}</h5>
                {props.comentario}
            </div>
        </div>
    )
}

export default Comentario
