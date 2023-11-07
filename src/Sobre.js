import React from "react";
import imgFundo from './img/Fundo1.jpg';


function Sobre (){
    return (
        <section id="about">
      <div className="background-about">
        <div className="img-wrapper">
          <img src={imgFundo} alt="img2-codigo" />
        </div>
      </div>

      <div className="box-about">
        <div className="section-subtitle">
          <h2>
            <p>💻</p>
            <p><span>Desenvolvedora</span> Front-End</p>
          </h2>
        </div>

        <h3>
          Sou estudante de programação com ênfase em Front-End e conhecimento
          nas linguagens
          <p>HTML, CSS e JavaScript</p>
        </h3>

        <h4>
          Meu nome é Joyce Amaral, tenho 26 anos. Estou em processo de migração
          de carreira e em busca da minha primeira oportunidade na área.
        </h4>

        <h4>
          Abaixo está o meu
          <p>currículo</p>
          para download.
        </h4>

        <div className="button-cta">
          <button>Currículo</button>
        </div>
      </div>
    </section>
    )
}

export default Sobre;