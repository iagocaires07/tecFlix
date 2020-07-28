import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CadastrarVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

const pageNotFund = () => (<div>Pagina 404</div>);


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastrar/video" component={CadastrarVideo} />
    <Route path="/cadastrar/categoria" component={CadastroCategoria} />
    <Route component={pageNotFund} />

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
