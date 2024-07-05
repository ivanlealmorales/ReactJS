import React from 'react';
import bauruzinho from '../assets/bauruzinho.jpg';
import '../estilos/estilos.css';
function SobreBauru() {
  return (
    <div>
      <section className="Secao">
        <div className="container">
         <div className="imagem_sobrebauru">
            <img src={bauruzinho} alt="Bauruzinho" />
        </div>

          <div className="texto">
            <h2>Sobre Bauru</h2>
            <p>Bauru é uma cidade localizada no interior do estado de São Paulo, conhecida por sua economia diversificada e forte presença no setor de serviços.</p>
            <p>Com uma história rica e uma população acolhedora, Bauru é um lugar vibrante para se viver e visitar.</p>
            <p>Este é um texto adicionado para verificar se o componente está sendo renderizado corretamente.</p>
          </div>
        </div>
      </section>
    </div>

  );
}

export default SobreBauru;



