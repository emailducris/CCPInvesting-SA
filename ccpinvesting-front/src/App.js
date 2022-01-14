import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Inicio from './componentes/Inicio';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Contato from './componentes/Contato';
import Login from './pages/login/Login';
import Listagem from './acao/Listagem';
import Perfil from './investidor/Perfil';
import Cadastro from './investidor/Cadastro';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Cabecalho />
            <Route path="/inicio" exact component={Inicio} />
            <Route path="/acao" component={Listagem} />
            <Route path="/fale-conosco/salvar" component={Contato} />
            <Route path="/investidor/cadastrar" component={Cadastro} />
            <Route path="/seguranca/login" component={Login} />
            <Route path="/perfil" component={Perfil} />
            <Rodape />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
