// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App({name, greetings = 'Hello Again', style}) {

  const h2Style = !style ? greetings.toLowerCase() === 'bye' ? {background: 'red'} : {background: 'blue'} : {background: style.background}

  let [value, changeValue] = useState('')

  return (
    <>
      {greetings.toLowerCase().includes('hello') ? <div className='main' style={{...h2Style, height: 50}}><h3>{greetings}, {name}!</h3></div> : <div className='main' style={h2Style}><h3>{greetings}, {name}!</h3></div>}
      
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
