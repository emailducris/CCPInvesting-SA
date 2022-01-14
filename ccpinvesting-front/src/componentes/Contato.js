import React from 'react';
import Jumbotron from './Jumbotron'

const Contatos = (props) => {
  return (
    <div>
    <Jumbotron />
    <div>
      {/*Container (Contact Section) */}
      <div id="contact" className="container-fluid bg-grey">
        <h2 className="text-center">CONTATO</h2>
        <div className="row">
          <div className="col-sm-5">
            <p>
              Nosso Serviço de Atendimento ao Cliente funciona de segunda à
              sábado, das 08:00 às 20:00 horas (horário de Brasília), exceto em
              feriados nacionais. Utilize o formulário para nos enviar o seu
              nome, informações de contato e detalhes da mensagem. Nós
              retornaremos dentro de 24 horas.
            </p>
            <p>
              <span className="glyphicon glyphicon-map-marker"></span>{' '}
              Florianópolis, SC
            </p>
            <p>
              <span className="glyphicon glyphicon-phone"></span> +55 48
              33336666
            </p>
            <p>
              <span className="glyphicon glyphicon-envelope"></span>{' '}
              investingccp@gmail.com
            </p>
          </div>
          <div className="col-sm-7 ">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="Name"
                  name="Name"
                  placeholder="Digite o seu nome"
                  type="text"
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Digite seu Email"
                  type="email"
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Digite seu comentário"
              rows="5"
            ></textarea>
            <br />
            <div className="row">
              <div className="col-sm-12 form-group">
                <button className="btn btn-default pull-right" type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contatos;
