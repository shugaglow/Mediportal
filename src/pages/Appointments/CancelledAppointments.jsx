import React from 'react'
import CancelledCards from './CancelledCards'


function CancelledAppointments() {
  return (
    <div className='p-4 bg-white'>

        <div>
            <h2 className='text-lg md:text-xl font-semibold'>Cancelled Appointments</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-6'>Here are your cancelled appointments.</p>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         <CancelledCards
         doctorName="Dr. Sarah Johnson"
            department="Dermatology"
            date="Feb 10, 2025"
            time="10:30 AM"
            status="cancelled"
            location="Room 204, Main Hospital"/>

        <CancelledCards
         doctorName="Dr. Michael Ade"
            department="Cardiology"
            date="Jan 25, 2025"
            time="2:00 PM"
            status="cancelled"
            location="Room 101, Heart Center"/>

        <CancelledCards
         doctorName="Dr. Helen Ojo"
            department="Pediatrics"
            date="Jan 12, 2025"
            time="9:00 AM"
            status="cancelled"
            location="Room 305, Children's Wing"/>

            <CancelledCards
         doctorName="Dr. Ife Ayobami"
            department="General Medicine"
            date="Dec 5, 2024"
            time="11:00 AM"
            status="cancelled"
            location="Room 110, General Ward"/>

            <CancelledCards
         doctorName="Dr. Kelechi Nwosu"
            department="Neurology"
            date="Nov 20, 2024"
            time="3:00 PM"
            status="cancelled"
            location="Room 220, Neuro Center"/>
       </div>
    </div>
  )
}

export default CancelledAppointments