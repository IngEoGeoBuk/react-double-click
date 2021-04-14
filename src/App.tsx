import React from 'react';
import logo from './logo.svg';
import { useRef } from 'react';
import useDoubleClick from 'use-double-click';
import './App.css';

function App() {

  const Button22 = () => {
    const buttonRef = useRef(null);

    useDoubleClick({
      onSingleClick: e => {
        console.log(e, 'single click');
      },
      onDoubleClick: e => {
        console.log(e, 'double click');
      },
      ref: buttonRef,
      latency: 250
    });

    return <button ref={buttonRef}>Click Me</button>
  }

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
        <Button22 />
      </header>
    </div>
  );
}

export default App;
