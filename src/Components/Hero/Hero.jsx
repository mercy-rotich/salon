import React from 'react'
import './Hero.css'
import hero_image1 from '../../assets/hero-image1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
       <h3>Where tranquility meets transformation</h3>
       <p>Whe showcase your <span>Skin</span>,<span>hair</span> and </p>
       <p><span>
       body</span> the care and attention </p>
       <p>they deserve</p>

       <button>Book now</button>

       <img src={hero_image1} alt="" />
    </div>
  )
}

export default Hero
