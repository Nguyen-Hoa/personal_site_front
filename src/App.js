import React, { useReducer } from 'react';
import './css/App.css';

import { Container, Grid, Item } from 'semantic-ui-react';

import ContactMenu from "./components/Contact/ContactMenu";
import NeuronVisualization from "./components/Neurons/NeuronVisualization";
import CVFull from "./components/CV/CVFull";
import curriculum_vitae from "./assets/cv";

const pageState = {curr_page: 'blank'};

function page_render(curr_page) {
  switch (curr_page) {
    case 'cv':
      return <CVFull cv={curriculum_vitae}/>
    case 'neuron_vis':
      return <NeuronVisualization/>
    default:
      return <p></p>
  }
}

function page_reducer(state, action){
  switch (action.type) {
    case 'cv':
      if (state.curr_page ==='cv')
        return {curr_page: 'blank'}
      else
        return {curr_page: 'cv'}
    case 'neuron_vis':
      if (state.curr_page === 'neuron_vis')
        return {curr_page: 'blank'}
      else
        return {curr_page: 'neuron_vis'}
    default:
      throw new Error();
  }
}

export default function App() {

  const [state, dispatch] = useReducer(page_reducer, pageState)

  return(
    <div className="App">
      <header className="App-header">
        <h1><a href='/'>Hoa Nguyen</a></h1>
        <ContactMenu/>
      </header>

      <div>
        <Grid container columns={3} celled>
          <Grid.Row>
            <Grid.Column>
              <Item
                header="Employment and Experiences"
                className="homepage-item-header"
                content="Resumé"
                onClick={() => dispatch({type:'cv'})}
              />
            </Grid.Column>

            <Grid.Column>
              <Item
                header="Neuron Visualization"
                className="homepage-item-header"
                content="Using ThreeJS to draw neurons"
                onClick={() => dispatch({type:'neuron_vis'})}
              />
            </Grid.Column>
            
            <Grid.Column>
              <Item
                header="Activation Maximization"
                className="homepage-item-header"
                content="A simple technique to visualize features learned by artificial neural networks"
                href='https://github.com/Nguyen-Hoa/Activation-Maximization'
                target="_blank" 
                rel="noopener noreferrer"
              />
            </Grid.Column>
          </Grid.Row>

        </Grid>
        <Container>{page_render(state.curr_page)}</Container>
      </div>
    </div>
  );      
}

