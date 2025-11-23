import React from 'react'
import PastCards from './PastCards'


function PastAppointments() {
  return (
    <div className='p-4 bg-white'>

        <div className='mb-4'>
            <h1 className='text-lg md:text-xl font-semibold'>Past Appointments</h1>
            <p className=' text-sm md:text-lgtext-gray-600 mb-'>Here are your past appointments</p>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         <PastCards
            doctorName="Dr. Sarah Johnson"
            department="Dermatology"
            date="Feb 10, 2025"
            time="10:30 AM"
            status="completed"
            location="Room 204, Main Hospital"/>

            <PastCards 
            doctorName="Dr. Michael Ade"
            department="Cardiology"
            date="Jan 25, 2025"
            time="2:00 PM"
            status="completed"
            location="Room 101, Heart Center"/>

            <PastCards 
            doctorName="Dr. Helen Ojo"
            department="Pediatrics"
            date="Jan 12, 2025"
            time="9:00 AM"
            status="completed"
            location="Room 305, Children's Wing"/>

            <PastCards 
            doctorName="Dr. Ife Ayobami"
            department="General Medicine"
            date="Dec 5, 2024"
            time="11:00 AM"
            status="completed"
            location="Room 110, General Ward"/>
       </div>
    </div>
  )
}

export default PastAppointments