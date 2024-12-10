import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function createTrip() {
  return (
    <div className='sm:px-10 md:px-31 lg:px-56 xl:px-10 px-5 mt-10' >
      <h2 className='font-bold text-3xl text-center'>Dites-nous vos préférences de voyage.</h2>
        <p className='mt-3 text-gray-500 text-xl'>Fournissez simplement quelques informations de base, et notre planificateur de voyage générera un itinéraire personnalisé en fonction de vos préférences.</p>      
      
          <div className='mt-20'>
             <div>
              <h2 className='text-xl my-3 font-medium'>Quelle est votre destination préférée ?</h2>
              <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
              
                />
             </div>
          </div>
      </div>
  )
}

export default createTrip