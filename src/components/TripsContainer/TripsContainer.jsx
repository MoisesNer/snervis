import React from 'react'
import { Link } from 'react-router-dom'
import './tripsContainer.css'

import { withProjectConsumer } from '../../Context'

function TripsContainer({ context }) {
    const { projects } = context;
    // console.log(projects);

    return (
        <div className='trips-container'>
            {
                projects.map((item, index) => {
                    return (
                        <li className='cards__item' key={index}>
                        <Link className='cards__item__link'to={`${item.label}/${item.slug}`}>
                          <figure className='cards__item__pic-wrap' data-category={item.label}>
                            <img
                              className='cards__item__img'
                              alt='Travel'
                              src={item.images[1]}
                            />
                          </figure>
                          <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{item.heading}</h5>
                          </div>
                        </Link>
                      </li>
                    )
                })
            }
        </div>
        )
}

export default withProjectConsumer(TripsContainer)