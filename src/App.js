import React, { useReducer } from 'react';
import './css/App.css';

import { Container, Grid, Item } from 'semantic-ui-react';

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
        <h1>Hoa Nguyen</h1>
        <ContactMenu/>
        <Grid container columns={3} celled>
          <Grid.Row>
            <Grid.Column>
              <Item
                header="Employment and Experiences"
                className="homepage-item-header"
                content="My curriculum vitae"
                onClick={() => dispatch({type:'cv'})}
              />
            </Grid.Column>
            
            <Grid.Column>
              <Item
                header="CV Search"
                className="homepage-item-header"
                content="Search engine for my curriculum vitae"
                onClick={() => dispatch({type:'cv_search'})}
              />
            </Grid.Column>
            
            <Grid.Column>
              <Item
                header="Notes on Feature Visualization"
                className="homepage-item-header"
                content="Markdown notes on the topic of visualizing neural networks"
                href='https://nguyen-hoa.github.io/feature-vis/'
                target="_blank" 
                rel="noopener noreferrer"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </header>
      <body>
        <Container>{state.curr_page}</Container>
      </body>
    </div>
  );      
}

