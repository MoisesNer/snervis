import React from 'react'
import CardItem from './CardItem'
import './cards.css'

function Cards() {
    return (
        <div className='cards'>
        <h1>SEBI Trough the World!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                  src='images/italy1.png'
                  text='Travelling through the Mediterranean Sea, from a cruise, disembarked in ITALY Nov,2018'
                  label='INTERNATIONAL'
                  path='/europe'
                />
              <CardItem
                src='images/spain1.png'
                text='SEBI goes to visit his grand grandmothers in SPAIN, Nov 2018'
                label='INTERNATIONAL'
                path='/europe'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/chile2.png'
                text='On his hut for a new Home, Sebi went to his grand homeland CHILE, Jan 2019'
                label='INTERNATIONAL'
                path='/latinamerica'
              />
              <CardItem
                src='images/mexico1.png'
                text='Living his first year in town visits Val`Quirico Puebla MEXICO, July 2018'
                label='INTERNATIONAL'
                path='/latinamerica'
              />
              <CardItem
                src='images/france2.png'
                text='Travelling through the Mediterranean Sea, from a cruise, disembarked in FRANCE, Nov 2018'
                label='INTERNATIONAL'
                path='/latinamerica'
              />
            </ul>
            <ul className='cards__items'>
                <CardItem
                  src='images/canada1.png'
                  text='Establised in Canada, Sebastian starts his career as a professional biker in 2021'
                  label='CANADA'
                  path='/canada'
                /> 
                <CardItem
                  src='images/canada5.png'
                  text='Hikes are his passion, visiting the three mountains that surrounds Vancouver, Winter 2020'
                  label='CANADA'
                  path='/canada'
                /> 
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Cards
