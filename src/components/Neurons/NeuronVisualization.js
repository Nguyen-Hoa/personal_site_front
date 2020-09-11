import React, { Component } from 'react';

import threeEntryPoint from "./threeEntryPoint"

export default class NeuronVisualization extends Component {
    
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div className="header-header" ref={element => this.threeRootElement = element} />
        );
    }
}