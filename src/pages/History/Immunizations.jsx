import React from 'react'
import VaccinationCard from './VaccinationCard'
import TopComponent from '../../components/TopComponent'

function Immunizations() {
  return (
    <div className='px-4'>
        <div className=''>

        <div className=''>
            <h2 className='text-lg md:text-xl font-semibold'>Immunization Records</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-8'>Keep track of all your vaccinations in one place. View past immunizations, upcoming booster dates, and ensure you’re always up to date with your health.</p>
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        <VaccinationCard
            vaccineName="COVID-19 Booster"
            administeredDate="January 10, 2025"
            nextDueDate="July 10, 2025"
            />

            <VaccinationCard
            vaccineName="Influenza (Flu) Vaccine"
            administeredDate="October 5, 2024"
            nextDueDate="October 5, 2025"
            />

            <VaccinationCard
            vaccineName="Tetanus, Diphtheria, Pertussis (Tdap)"
            administeredDate="August 20, 2023"
            nextDueDate="August 20, 2033"
            />

    </div>
    </div>
  )
}

export default Immunizations