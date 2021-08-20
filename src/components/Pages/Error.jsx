import React from 'react'
import { AdventureData } from '../../data/AdventuresData';
import '../../globalStyle.css'
import { Link } from 'react-router-dom'

export default function Error() {
    const { hero, title, content} = AdventureData[2];
    return (
        <div className='error'>
            <h1>{hero}</h1>
                    <h3>{title}</h3>
                    <Link className='error-btn' to='/'>{content}</Link>
        </div>
    )
}
