import React from 'react';
import logo from './assets/logo.svg';
import documentos from './assets/documentos.svg';
import serie from './assets/serie.svg';
import relatorios from './assets/relatorios.svg';
import mapa from './assets/mapa.svg';
import visualizador from './assets/visualizador.svg';
import {Link} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'

const App = () => {
    return (
      <div className="App">

        {/* Menu */}
        <div className="Menu">
            <li className="Item">O SIMS</li>
            <li className="Item">PERGUNTAS FREQUENTES</li>
            <li className="Item">CONTATO</li>
        </div>

        {/* Conteúdo */}
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        
          {/* Perfis */}
          <div className="App-content" style={{paddingTop: '100px'}}>
            <text style={{color:'#40473a', fontWeight:700, fontSize:20}}>
              Navegue pelo sistema<br/>
            </text>
          </div>
          <div className="App-content">
            <div className="App-profile">
              <Link to="/documentos-tecnicos" className="Link-perfil">
              <div className="App-profile-content">
                <h1>Documentos técnicos</h1>
                <h2>Acesse os produtos elaborados durante o Plano Municipal de Saneamento Básico</h2>
              </div>
              </Link>
              <img src={documentos} className="App-profile-image" alt="logo"/>
            </div>
            <div className="App-profile" style={{marginLeft:'2%'}}>
              <Link to="/relatorios" className="Link-perfil">
              <div className="App-profile-content">
                <h1>Relatórios</h1>
                <h2>Visualize a síntese de informações e indicadores sobre o saneamento</h2>
              </div>
              </Link>
              <img src={relatorios} className="App-profile-image" alt="logo"/>
            </div>
            <div className="App-profile" style={{marginLeft:'2%'}}>
              <Link to="/serie-historica" className="Link-perfil">
              <div className="App-profile-content">
                <h1>Série histórica</h1>
                <h2>Acesse a série histórica das informações e indicadores do saneamento</h2>
              </div>
              </Link>
              <img src={serie} className="App-profile-image" alt="logo"/>
            </div>
          </div>
          <div className="App-content">
            <div className="App-profile">
              <Link to="/mapa-interativo" className="Link-perfil">
              <div className="App-profile-content">
                <h1>Mapa interativo</h1>
                <h2>Explore mapas com dados georreferenciados sobre o saneamento</h2>
              </div>
              </Link>
              <img src={mapa} className="App-profile-image" alt="logo"/>
            </div>
            <div className="App-profile" style={{marginLeft:'2%'}}>
              <Link to="/visualizador" className="Link-perfil">
              <div className="App-profile-content">
                <h1>Visualizador de dados</h1>
                <h2>Navegue livremente pelos dados do saneamento básico de seu município</h2>
              </div>
              </Link>
              <img src={visualizador} className="App-profile-image" alt="logo"/>
            </div>
          </div>

        </header>

      </div>
    );
}

export default App;