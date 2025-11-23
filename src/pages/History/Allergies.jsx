import React from 'react'
import AllergyCard from './AllergyCard'
import TopComponent from '../../components/TopComponent'

function Allergies() {
  return (
    <div className='bg-white p-4 rounded-md'>

         <div className=''>

            <div className=''>
            <h2 className='text-lg md:text-xl font-semibold'>Your Allergy Records</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-2'>Keep track of the allergies that affect your health. This helps your care team avoid triggers and provide the safest possible treatment.</p>
        </div>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <AllergyCard
                name="Penicillin"
                severity="Severe"
                reaction="Anaphylaxis"
                />

            <AllergyCard
                name="Peanuts"
                severity="Moderate"
                reaction="Hives and swelling"
                />

            <AllergyCard
                name="Dust Mites"
                severity="Mild"
                reaction="Sneezing and runny nose"
                />

                <AllergyCard
                name="Latex"
                severity="Severe"
                reaction="Skin rash and difficulty breathing"
                />

        </div>
    </div>
  )
}

export default Allergies