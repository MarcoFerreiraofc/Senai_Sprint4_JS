// importar bibliotecas
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

// importar css'
import './index.css';

// importar arquivos
import App from './pages/home/App';
import TipoEventos from './pages/tipoEventos/tipoEventos';
import NotFound from './pages/notFound/notFound';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} /> {/* Home */}
        <Route path="/tipoEventos" component={TipoEventos} /> {/* TipoEventos */}
        <Route path="/notFound" component={NotFound} /> {/* NotFound */}
        
        <Redirect to="/notFound" />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root')); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
