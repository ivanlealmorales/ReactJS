import React from 'react';
import { Link } from 'react-router-dom';


function Navegacao() {
  return (
    <nav className="Navegacao">
      <ul>
        <li><Link to="/">Sobre Bauru</Link></li>
        <li><Link to="/NegociosBauru">Negócios Bauru</Link></li>
        <li><Link to="/ImagemBauru">Imagem Bauru</Link></li>
        <li><Link to="/Atracoes">Atracoes</Link></li>
      </ul>
    </nav>
  );
}

export default Navegacao;
