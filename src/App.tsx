import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

function App() {
  return (
    <div id='whole-page'>
      <div id='left-side-container' className='slide-in-left'>
        <h1 id="h1-presentation">Tristan Collon's portfolio</h1>
        <div id='left-side-content'>
          <Presentation />
        </div>
      </div>
      <div id='right-side-container' className='slide-in-right'>
        <Projects />
      </div>
    </div>
  );
}

export default App;
