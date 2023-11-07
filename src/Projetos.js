import React from "react";
import Forca from './img/forca.png';
import Agrupador from './img/agrupador.jpg';
import Calculadora from './img/calculadora.png';


function Projetos (){
    return(
        <section id="projects">
      <div className="projects-title">
        <h2>PROJETOS 🧩</h2>
      </div>

      <div className="wrapper-projects">
        <div className="card-project">
          <div className="content-project">
            <div className="image-project">
              <img src={Forca} alt="img-forca" />
            </div>
            <span>Jogo da forca</span>
            <p>Esse projeto, simula um jogo da forca.</p>
            <div className="cta-project">
              <a
                href="https://github.com/Joyamarall/jogodaforca.git"
              >
                Código
              </a>
              <a href="/">
                Site
              </a>
            </div>
          </div>
        </div>
        <div className="card-project">
          <div className="content-project">
            <div className="image-project">
              <img src={Agrupador} alt="img-agrupador"/>
            </div>
            <span>Agrupador de links</span>
            <p>
              Esse projeto, foi desenvolvido para realizar agrupamento de links.
            </p>
            <div className="cta-project">
              <a href="https://github.com/Joyamarall/links.git">
                Código
              </a>
              <a href="/">
                Site
              </a>
            </div>
          </div>
        </div>
        <div className="card-project">
          <div className="content-project">
            <div className="image-project">
              <img src={Calculadora} alt="img-agrupador"/>
            </div>
            <span>Calculadora</span>
            <p>
              Esse projeto simula uma calculadora.
            </p>
            <div className="cta-project">
              <a href="https://github.com/Joyamarall/calculadora">
                Código
              </a>
              <a href="/">
                Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
};

export default Projetos;