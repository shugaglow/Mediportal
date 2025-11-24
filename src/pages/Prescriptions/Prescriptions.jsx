import React from 'react'
import TopComponent from '../../components/TopComponent'
import PrescriptionCard from './PrescriptionCard'

function Prescriptions() {
  return (
    <div className='w-full'>

      
      <div className='px-4'>
            <h2 className='text-xl font-bold text-blue-900 mt-24 lg:mt-8'>Prescription Cards</h2>
            <p className=' text-gray-600 mb-6'>Keep track of all your medications, so you never miss a dose.</p>
        </div>

      <div className='mt-8 p-4 grid grid-col-1 md:grid-cols-2 gap-4 w-full'>
        <PrescriptionCard
            status="active"
            medication="Lisinopril"
            doctor="Dr. Sarah Johnson"
            dosage="10mg"
            frequency="Once daily"
            startDate="April 1, 2025"
            endDate="June 30, 2025"
            refillsLeft={2}
          />

          <PrescriptionCard
            status="inactive"
            medication="Atorvastatin"
            doctor="Dr. Michael Lee"
            dosage="20mg"
            frequency="Once daily at bedtime"
            startDate="March 15, 2025"
            endDate="May 15, 2025"
            refillsLeft={0}
          />

          <PrescriptionCard
            status="active"
            medication="Metformin"
            doctor="Dr. Emily Davis"
            dosage="500mg"
            frequency="Twice daily with meals"
            startDate="February 10, 2025"
            endDate="August 10, 2025"
            refillsLeft={3}
          />


      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Prescriptions