import React, { Component } from 'react';
import {Segment} from 'semantic-ui-react';

export default class BaseCVRender extends Component{

    render(){
        return(
            <Segment>
                {this.props.content.map(item => {
                    return this.props.renderer(item);
                })}
            </Segment>
        )
    }
}

/* Function Based */
// Given an array of items and a render function
// Render all items into one component
// const BaseCVRenderer = ({content, renderer}) => (
//   <Component>
//     {content.map(item => {
//         return renderer(item);
//     })}
//   </Component>
// );
// export default BaseCVRenderer;


