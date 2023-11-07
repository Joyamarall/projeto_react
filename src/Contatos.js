import React from "react";

function Contatos (){
    return(
        <section id="contacts" >
        <div className="contact-icon-content">
        <h2>Contato 📞</h2>
      </div>
      <div className="contact-icons-wrapper">
        <div className="contact-icon-content">
          <div className="contact-icon">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div className="contact-info">
            <span>📍 Localização</span>
            <p>Pernambuco, Brasil</p>
          </div>
        </div>
          <div className="contact-info">
            <span>✉️ E-mail</span>
            <a href="/"> joylta97@outlook.com </a>
          </div>
      </div>
    </section>
    )
}

export default Contatos;