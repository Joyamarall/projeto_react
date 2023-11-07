import React from "react";
import ImgHtml from './img/html.svg';
import ImgCss from './img/css.svg';
import ImgJs from './img/js.svg';
import Minhafoto from './img/minhafoto.jpeg';
import ImgLink from './img/logo-linkedin.svg';
import ImgGit from './img/logo-github.svg';


function Pessoal (){
    return(
        <section id="person">
      <div className="person-content">
        <div className="person-name">
          <h1>Olá, <span></span></h1>
          <h1>Meu nome é <span></span></h1>
          <h1>Joyce Amaral <span></span></h1>
        </div>

        <div className="stacks-content">
          <h3>Techs :</h3>

          <div className="stacks">
            <ul>
              <li>
                <div data="HTML">
                  <img src={ImgHtml} alt="html-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div data="CSS">
                  <img src={ImgCss} alt="css-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div data="JS">
                  <img src={ImgJs} alt="js-icon" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="person-background">
        <div className="wrapper-profile-photo">
          <img
            className="profile-photo"
            src= {Minhafoto}
            alt="foto-joyce"
          />
        </div>

        <div className="links">
          <a href="https://github.com/Joyamarall">
            <img src={ImgGit} alt="icon-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/joyce-amaral-programacao/">
            <img src={ImgLink} alt="icon-likedin" />
          </a>
        </div>
      </div>
    </section>
    )
}

export default Pessoal;