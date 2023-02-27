import React, { useReducer } from 'react';
import './css/App.css';

import { Container, Grid, Item } from 'semantic-ui-react';

import ContactMenu from "./components/Contact/ContactMenu";
import NeuronVisualization from "./components/Neurons/NeuronVisualization";
import CVFull from "./components/CV/CVFull";
import curriculum_vitae from "./assets/cv";
import { ReactComponent as Hoa } from "./assets/geometric_name.svg";

const pageState = { curr_page: 'blank' };

function page_render(curr_page) {
  switch (curr_page) {
    case 'cv':
      return <CVFull cv={curriculum_vitae} />
    case 'neuron_vis':
      return <NeuronVisualization />
    default:
      return <p></p>
  }
}

function page_reducer(state, action) {
  switch (action.type) {
    case 'cv':
      if (state.curr_page === 'cv')
        return { curr_page: 'blank' }
      else
        return { curr_page: 'cv' }
    case 'neuron_vis':
      if (state.curr_page === 'neuron_vis')
        return { curr_page: 'blank' }
      else
        return { curr_page: 'neuron_vis' }
    default:
      throw new Error();
  }
}

export default function App() {

  const [state, dispatch] = useReducer(page_reducer, pageState)

  return (
    <div className="App">
      <header className="App-header">
        <Hoa href="/" />
        <ContactMenu />
      </header>
    </div>
  );
}

