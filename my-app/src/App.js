import logo from './logo.svg';
import interessado from './assets/cidadao-interessado.svg';
import colaborador from './assets/cidadao-colaborador.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Menu */}
      <div className="Menu">
          O SIMS PERGUNTAS FREQUENTES CONTATO
      </div>

      {/* Conteúdo */}
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <div className="App-content" style={{paddingTop: '50px'}}>
          <text style={{color:'#40473a', fontWeight:700, fontSize:20}}>
            Qual o seu perfil?<br/>
          </text>
        </div>

        {/* Perfis */}
        <div className="App-content">
          <div className="App-profile">
            <div className="App-profile-content">
              <h1>Cidadão interessado</h1>
              <h2>Navegue livremente pelos mapas e dados do Saneamento Básico</h2>
            </div>
            <img src={interessado} className="App-profile-image" alt="logo"/>
          </div>
          <div className="App-profile" style={{marginLeft:'2%'}}>
            <div className="App-profile-content">
              <h1>Cidadão colaborador</h1>
              <h2>Contribua com informações sobre Saneamento na sua localidade</h2>
            </div>
            <img src={colaborador} className="App-profile-image" alt="logo"/>
          </div>
        </div>

      </header>

    </div>
  );
}

export default App;