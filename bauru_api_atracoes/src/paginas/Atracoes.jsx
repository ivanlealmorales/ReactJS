import React from 'react';
import '../estilos/estilos.css';
import ListaPost from "../paginas/ListaPost";


function Atracoes() {
  return (
    <main>
      <div className="container">
           <ListaPost url={'/posts'} />
    </div>
    </main>

  );
}

export default Atracoes