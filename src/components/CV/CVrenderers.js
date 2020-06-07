import React from 'react';

export function render_employment (item) {
    return (
        <div className="Employment">
        <div> {item.location} </div>
        <div> {item.position} </div>
        <div> From: {item.time.start.month} {item.time.start.year} </div>
        <div> To: {item.time.end.month} {item.time.end.year} </div>
            <ul>
                {item.description.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    )
}

export function render_education (item) {
    return (
        <div className="Education">
        <div> {item.location} </div>
        <div> {item.position} </div>
        <div> From: {item.time.start.month} {item.time.start.year} </div>
        <div> To: {item.time.end.month} {item.time.end.year} </div>
            <ul>
                {item.description.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    )
}

export function render_awards (item) {
    return(
        <div className="Awards">
            <div>{item.organization}</div>
            <div>{item.title}</div>
            <div>Received: {item.date.month} {item.date.year}</div>
            <ul>
                {item.description.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    )
}

export function render_list (item) {
    return (
        <li>{item}</li>
    )
}

export function render_skills (item) {
    return(
        <div className="Skills">
            <h3>Programming Languages</h3>
            <ul>
                {item.languages.programming.map(bullet =>
                    <li>{bullet}</li>
                    )}
            </ul>

            <h3>Spoken Languages</h3>
            <ul>
                {item.languages.lingual.map(bullet => 
                    <li>{bullet}</li>)}
            </ul>

            <h3>Technologies</h3>
            <h6>Graphics</h6>
            <ul>
                {item.technologies.graphics.map(bullet =>
                    <li>{bullet}</li>
                    )}
            </ul>
            <h6>Machine Learning</h6>
            <ul>
                {item.technologies.machine_learning.map(bullet =>
                    <li>{bullet}</li>
                    )}
            </ul>
            <h6>Web</h6>
            <ul>
                {item.technologies.web.map(bullet =>
                    <li>{bullet}</li>
                    )}
            </ul>
        </div>
    )
}




