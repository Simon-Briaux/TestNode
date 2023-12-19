import logo from './chat.svg';
import './App.css';
import FunctionalComponent from './composant/testcolor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br><br></br><br></br>
        <label for="name">Nom d'utilisateur</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="20" />

        <label for="mdp">Mots de passe</label>
        <input type="text" id="mdp" name="mdp" required minlength="4" maxlength="8" size="20" />
        
        <FunctionalComponent couleur={'red'}/>
        <a
          
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        
      </header>
    </div>
  );
}

export default App;
