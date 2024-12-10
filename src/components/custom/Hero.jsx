import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    
    <div className='flex flex-colitems-center mx-56 gap-9'>
        <h1
        className='font-extrabold text-[50px] text-center mt-16'>
            <span className='text-[#f56551]'>Planificateur De Voyage</span><br></br>Découvrez Votre Prochaine Aventure Avec l'IA 
        <p className='text-xl text-gray-500 text-center'>Votre planificateur de voyage personnel et créateur d'itinéraires, élaborant des programmes sur mesure en fonction de vos intérêts et de votre budget.</p>
        <Link to={'/create-trip'}>
        <Button>COMMENCER - C'est gratuit !</Button>
        </Link>
        </h1>
         
         
    </div>
  )
}

export default Hero