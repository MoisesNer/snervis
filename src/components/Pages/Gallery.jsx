import React from 'react'
import { AdventureData } from '../../AdventuresData';
import '../../globalStyle.css'
// import { GalleryData } from '../../GalleryData';


export default function Gallery() {
    const { hero, title, content, images, alt } = AdventureData[1];

    return (
        <>
            <h1 className="gallery">{hero}</h1>
            <div className="container">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="content">
                    <p>{content}</p>
                    <div className="gallery-images">
                        {images.map((item, index) => {
                            return (
                                <img src={item} alt={alt} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}