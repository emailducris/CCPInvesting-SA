import React from 'react';
import { useHistory } from 'react-router-dom';
import chris from '../assets/chris.jpg';
import cristhiano from '../assets/cristhiano.jpg'
import pietro from '../assets/pietro.jpg'
import Jumbotron from './Jumbotron';


const Inicio = (props) => {

  const history = useHistory();

  const click = () => {
    history.push("/fale-conosco/salvar");
  }

  return (
    <div>
      <Jumbotron />
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>Sobre a CCPInvesting</h2>
            <br />
            <h4>
              Com mais de 650 fundos, títulos de renda fixa, tesouro direto,
              câmbio, previdência e absolutamente todas as opções pra se
              investir em ações, a CCPInvesting tem um portfólio completo e um time de
              assessores especializados pra ajudar a achar o investimento
              perfeito pra você.
            </h4>
            <br />
            
            <button className="btn btn-default btn-lg" onClick={() => click()}>Fale conosco</button>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center ">
            <div className="col-sm-4" style={{padding: '80px'}}>
              <div className="thumbnail">
                <img src={chris} className="foto-inicio" alt="Christofer"/>
                <p>
                  <strong>Christofer Azevedo</strong>
                </p>
                <p>Backend Specialist</p>
              </div>
            </div>
            <div className="col-sm-4" style={{padding: '80px'}}>
              <div className="thumbnail">
                <img src={cristhiano} className="foto-inicio" alt="Cristhiano" />
                <p>
                  <strong>Cristiano Enchaki</strong>
                </p>
                <p>UX Specialist</p>
              </div>
            </div>
            <div className="col-sm-4" style={{padding: '80px'}}>
              <div className="thumbnail">
                <img src={pietro} className="foto-inicio" alt="Pietro" />
                <p>
                  <strong>Pietro Mendes</strong>
                </p>
                <p>Business Specialist</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Inicio;
