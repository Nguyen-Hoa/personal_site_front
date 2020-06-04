import React from 'react';
import './css/App.css';

import ContactMenu from "./components/Contact/ContactMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactMenu/>
      </header>
    </div>
  );
}

export default App;