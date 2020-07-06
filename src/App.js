import React, { useState, useReducer } from 'react';
import './css/App.css';

import { Button, Card, Container, Grid } from 'semantic-ui-react';

import ContactMenu from "./components/Contact/ContactMenu";
import SearchExampleStandard from "./components/testComponent";
import CVFull from "./components/CV/CVFull";
import curriculum_vitae from "./assets/cv";

const page = {curr_page: <p></p>};

function page_reducer(state, action){
  switch (action.type) {
    case 'cv':
      return {curr_page: <CVFull cv={curriculum_vitae}/>}
    case 'cv_search':
      return {curr_page: <SearchExampleStandard/>}
    default:
      throw new Error();
  }
}

export default function App() {

  const [state, dispatch] = useReducer(page_reducer, page)

  return(
    <div className="App">
      <header className="App-header">
        Hoa Nguyen
        <ContactMenu/>
        Work in progress...
        <Container>
            <Card
              header="Employment and Experiences"
              meta="My curriculum vitae"
              onClick={() => dispatch({type:'cv'})}
            />
            
            <Card
              header="CV Search"
              meta="Search engine for my curriculum vitae"
              onClick={() => dispatch({type:'cv_search'})}
            />

            <Card
              header="Notes on Feature Visualization"
              meta="Markdown notes on the topic of visualizing neural networks"
              href='https://nguyen-hoa.github.io/feature-vis/'
              target="_blank" 
              rel="noopener noreferrer"
            />
        </Container>
      </header>
      <body>
        <Container>{state.curr_page}</Container>
      </body>
    </div>
  );      
}
