import React from 'react';

const Negociacoes = (props) => {
  return (
    <div id="services" className="container-fluid text-center">
      <h2>NEGOCIAÇÕES</h2>
      <h4>O que nós oferecemos?</h4>
      <br />
      <div className="row ">
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-off logo-small"></span>
          <h4>POWER</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-heart logo-small"></span>
          <h4>LOVE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-lock logo-small"></span>
          <h4>JOB DONE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
      <br />
      <br />
      <div className="row ">
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-leaf logo-small"></span>
          <h4>GREEN</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-certificate logo-small"></span>
          <h4>CERTIFIED</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <span className="glyphicon glyphicon-wrench logo-small"></span>
          <h4>HARD WORK</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>
  );
};

export default Negociacoes;
