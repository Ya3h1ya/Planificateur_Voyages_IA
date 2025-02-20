import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelsList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { toast } from 'sonner';


function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {


    setFormData({
       ...formData,
       [name]: value 
      })
  }

  useEffect(() => {
    console.log(formData);
  },[formData])

  const OnGenerateTrip=()=>{
    if(formData?.noOfDays>5&&formData?.location||!formData?.budget||!formData?.traveler){
      toast("Veuillez remplir les champs obligatoires")
      return;
    }
    console.log(formData);
  }

  return (
    <div className='sm:px-10 md:px-31 lg:px-56 xl:px-10 px-5 mt-10' >
      <h2 className='font-bold text-3xl text-center'>Dites-nous vos préférences de voyage.🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>Fournissez simplement quelques informations de base, et notre planificateur de voyage générera un itinéraire personnalisé en fonction de vos préférences.</p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>Quelle est votre destination préférée ?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); handleInputChange('location',v) }
            }}
          />
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>Combien de jours prévoyez-vous pour votre voyage ?</h2>
          <Input placeholder={'Ex.3'} type="number" 
          onChange={(e)=> handleInputChange('noOfDays', e.target.value)}
          />
          
        </div>
      </div>
      <div>
        <h2 className='text-xl my-3 font-medium'>Quel est votre budget ?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index}
             onClick={()=> handleInputChange('budget', item.title)}
            className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
            ${formData?.budget === item.title&& 'shadow-lg border-black' }
            `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>Avec qui prévoyez-vous de voyager pour votre prochaine aventure ?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelsList.map((item, index) => (
            <div key={index}
            onClick={()=> handleInputChange('traveler', item.people)}
            className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
            ${formData?.traveler === item.people&& 'shadow-lg border-black' }
            `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
        <div className='my-10 justify-end flex'>
          <Button onClick={OnGenerateTrip}>Générer le voyage</Button>
        </div>
    </div>
    
  
  )
}

export default CreateTrip