import React, {useEffect} from "react";

function dark() {
  const darkmode = document.body;


  darkmode.classList.toggle('darkMode');

  if (darkmode.classList.contains('darkMode')) {

    localStorage.setItem('tema', 'dark');
  } else {

    localStorage.setItem('tema', 'light');
  }
}




function Menu(){

  useEffect(() => {
    const temaAtual = localStorage.getItem('tema');
    if (temaAtual === 'dark') {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, []);

    return(<>
        <div id="menu">
        <div className="menu-nav">
          <nav>
              <ul class="ul">
                <li> <a className= "btn1" href="#person" > Home </a> </li>
                <li> <a className= "btn1" href="#about" > Sobre mim </a> </li>
                <li> <a className= "btn1" href="#projects" > Prjetos </a> </li> 
                <li> <a className= "btn1" href="#contacts" > Contato </a> </li> 
              </ul>
          </nav>
        </div>
        <div id="switch" onclick={dark}>
          <button></button>
          <span></span>
        </div>
        </div>
          </> );
        }

export default Menu;