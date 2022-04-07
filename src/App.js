import Button from './Button'
import logo from './logo.svg';
import './App.css';

const text = 'Hellohello'

function App() {
  return (
    <div className="App">
      <Button/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <p>Some text comes here</p>
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