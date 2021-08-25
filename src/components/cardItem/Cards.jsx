import React from 'react'
import CardItem from './CardItem'
import './cards.css'
import { AdventureDetails } from '../../data/AdventuresDetailData'

function Cards() {

  const { ...data } = AdventureDetails

  return (
    <div className='cards'>
      <h1>SEBI Trough the World!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={data[0].images[0]}
              text={data[0].heading}
              label={data[0].label}
              slug={`${data[0].label}/${data[0].slug}`}
            />
            <CardItem
              src={data[1].images[0]}
              text={data[1].heading}
              label={data[1].label}
              slug={`${data[1].label}/${data[1].slug}`}
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={data[2].images[0]}
              text={data[2].heading}
              label={data[2].label}
              slug={`${data[2].label}/${data[2].slug}`}
            />
            <CardItem
              src={data[3].images[0]}
              text={data[3].heading}
              label={data[3].label}
              slug={`${data[3].label}/${data[3].slug}`}
            />
            <CardItem
              src={data[4].images[0]}
              text={data[4].heading}
              label={data[4].label}
              slug={`${data[4].label}/${data[4].slug}`}
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={data[5].images[0]}
              text={data[5].heading}
              label={data[5].label}
              slug={`${data[5].label}/${data[5].slug}`}
            />
            <CardItem
              src={data[6].images[0]}
              text={data[6].heading}
              label={data[6].label}
              slug={`${data[6].label}/${data[6].slug}`}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
