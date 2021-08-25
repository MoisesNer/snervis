import React from 'react'
import { Button } from '../buttons/Button'
import './hero.css'
import '../../App.css'
import backvideo from './videos/video-1.mp4'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted>
                <source src={backvideo} type='video/mp4'/>
            </video>
            <h1>SEBASTIAN ADVENTURES</h1>
            <p>Join me in my long journey</p>
            <div className="hero-btns">
            <Link to='/international'>
                <Button
                    className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >Get Started</Button>
            </Link>
            <a href="https://www.youtube.com/watch?v=gjfUkxqDDNw">
                <Button
                    className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >Comming Next
                    <i className='far fa-play-circle' />
                </Button>
            </a>
            </div>
        </div>
    )
}

export default Hero;
