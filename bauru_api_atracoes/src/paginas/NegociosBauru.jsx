import React from 'react';
import Senac from '../assets/senac.jpg'; // Certifique-se de importar suas imagens corretamente
import Senac1 from '../assets/senac1.jpg'; // Certifique-se de importar suas imagens corretamente

function NegociosBauru() {
  return (
    <section className="Secao">
      <h2>Negócios em Bauru</h2>
      <p>Bauru abriga uma variedade de negócios, desde pequenas empresas familiares até grandes corporações multinacionais.</p>
      <p>O setor de comércio e serviços é especialmente forte, contribuindo significativamente para a economia local.</p>
      
      <div className="imagens_negociosbauru">
        <div className="imagem_img">
          <img src={Senac} alt="senac"style={{ width: '400px', height: 'auto', marginRight: '50px' }}   />
        </div>
        <div className="imagem_img">
          <img src={Senac1} alt="senac1" style={{ width: '400px', height: 'auto', marginRight: '50px' }}  />
        </div>
      </div>
    </section>
  );
}

export default NegociosBauru;
