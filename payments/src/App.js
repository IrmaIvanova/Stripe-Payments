import React from 'react';
import './sass/index.sass';
import Header from './components/Header.js';
import MainBlock from './components/Content/MainBlok.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header/>
        <MainBlock/>
      </header>
    </div>
  );
}

export default App;
