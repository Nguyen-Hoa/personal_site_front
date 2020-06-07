import React from 'react';
import './css/App.css';

import ContactMenu from "./components/Contact/ContactMenu";
import SearchExampleStandard from "./components/testComponent";
import CVFull from "./components/CV/CVFull";
import curriculum_vitae from "./assets/cv";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactMenu/>
        {/* <SearchExampleStandard/> */}
        <CVFull cv={curriculum_vitae} />
      </header>
    </div>
  );
}

export default App;