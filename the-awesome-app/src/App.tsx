import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <section>
          {/* <Message text="Hello React"/>
          <Message text="Hyderabad" textColor="blue"/>
          <Counter value={5} title="Counter"/>
          <Counter value={10} title="Counter"/> */}

          {/* <FnCounter value={5}/>
          <FnCounter value={20}/> */}

          <ListProducts/>
      </section>
    </div>
  );
}

export default App;
