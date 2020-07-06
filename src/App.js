import React from 'react';
import './css/App.css';

import ContactMenu from "./components/Contact/ContactMenu";
//import SearchExampleStandard from "./components/testComponent";
import CVFull from "./components/CV/CVFull";
import curriculum_vitae from "./assets/cv";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: 'home'
    };
  }

  setView(new_view) {
    this.setState({view: new_view});
  } 

  /*Dev
    Routing or pages, needs some navigation.
    Open links in new tab: https://stackoverflow.com/questions/15551779/open-link-in-new-tab-or-window
  */
  render() {

    let page;
    if (this.state.view === 'cv') { 
      page = <CVFull cv={curriculum_vitae} />
    }
    else {
      page = <p>This is home (:</p>
    }
    return (
      <div className="App">
        <header className="App-header">
        <ContactMenu setView={this.setView}/>
          Hoa Nguyen
        </header>
        <body>
          {page}
        </body>
      </div>
    );      
  }
}

export default App;