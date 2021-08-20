import React from 'react'
import { AdventureData } from '../../data/AdventuresData';
import '../../globalStyle.css'

export default function Biography() {
    const { hero, title, content, images, alt } = AdventureData[0];
    return (
        <>
            <h1 className="biography">{hero}</h1>
            <div className="container">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="content">
                    <p>{content}</p>
                    <div className="about-images">
                        {images.map((item, index) => {
                            return(
                                    <img src={item} alt={alt} key={index}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}