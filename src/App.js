import React from 'react';
import './css/App.css';

import ContactMenu from "./components/Contact/ContactMenu";
import SearchExampleStandard from "./components/testComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactMenu/>
        <SearchExampleStandard/>
      </header>
    </div>
  );
}

export default App;