import React from "react";
import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde 0</h1>
      <Saludo persona="pedrito" edad={12} vivo={true}></Saludo>
      
      <Saludo persona="juanito"  edad={20} vivo={true}></Saludo>
      <Saludo persona="lalito"  edad={80} vivo={false}></Saludo>
      <hr/>
      <h3>
        cajita de comentarios
      </h3>
      <hr/>
      <hr></hr>
      <Comentario img="https://picsum.photos/64" nombre="pedrito" comentario="este es el comentario de pedrito"/>
      <Comentario img="https://picsum.photos/64" nombre="juanito" comentario="este es el comentario de juanito"/>
      <Comentario img="https://picsum.photos/64" nombre="lalito" comentario="este es el comentario de lalito"/>

    </div>
  );
}

export default App;
