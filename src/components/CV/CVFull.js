import React, { Component } from 'react';

import './../../css/CVFull.css'
import { Container, } from 'semantic-ui-react';
import BaseCVRender from ".//BaseCVRender";
import { 
    render_employment, 
    render_education,
    render_list,
    render_awards,
    } from "./CVrenderers";


export default class CVFull extends Component {

    /*Dev
        DOM should only be width of text, not screen
        Able to fit elsewhere
     */

    render(){
        return(
            <Container className="CVFull">
                <h1>Employment</h1>
                <BaseCVRender 
                    content={this.props.cv.employment}
                    renderer={render_employment}
                />

                <h1>Education</h1>
                <BaseCVRender
                    content={this.props.cv.education}
                    renderer={render_education}
                />

                <h1>Awards</h1>
                <BaseCVRender
                    content={this.props.cv.awards}
                    renderer={render_awards}
                />

                <h1>Skills</h1>
                <h3>Languages</h3>
                <h4>Programming</h4>
                <BaseCVRender
                    content={this.props.cv.skills.languages.programming}
                    renderer={render_list}
                />
                <h4>Spoken</h4>
                <BaseCVRender
                    content={this.props.cv.skills.languages.lingual}
                    renderer={render_list}
                />
                <h3>Technologies</h3>
                <h4>Graphics</h4>
                <BaseCVRender
                    content={this.props.cv.skills.technologies.graphics}
                    renderer={render_list}
                />
                <h4>Machine Learning</h4>
                <BaseCVRender
                    content={this.props.cv.skills.technologies.machine_learning}
                    renderer={render_list}
                />
                <h4>Web</h4>
                <BaseCVRender
                    content={this.props.cv.skills.technologies.web}
                    renderer={render_list}
                />

            </Container>
        )
    }
}