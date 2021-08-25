import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProjectContext } from '../../Context'

export default class Destination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
        }
    }

    static contextType = ProjectContext;
    render() {
        const { getProject } = this.context;
        const project = getProject(this.state.slug);

        const { title, heading, text, images } = project
        return (
            <div className="destination">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <div className="content">
                        <p>{text}</p>
                    </div>
                    <div className="centered-btn">
                        <Link to="/international">Back to all trips</Link>
                    </div>
                </div>
                <div className="container">
                    <h3 className='destination-heading'>{heading}</h3>
                </div>
                <div className="destination-images">
                    {images.map((item, index) => {
                        return (
                            <img src={item} alt='' key={index} />
                        )
                    })}
                </div>
            </div>
        )
    }
}