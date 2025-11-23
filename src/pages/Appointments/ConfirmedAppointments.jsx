import React from 'react'
import ConfirmedCard from './ConfirmedCard'


function ConfirmedAppointments() {
  return (
    <div className='p-4 bg-white'>

        <div>
            <h2 className='text-lg md:text-xl font-semibold'>Confirmed Appointments</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-6'>Here are your confirmed appointments.</p>
        </div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <ConfirmedCard
         doctorName="Dr. Sarah Johnson"
            department="Dermatology"
            date="Feb 10, 2025"
            time="10:30 AM"
            status="confirmed"
            location="Room 204, Main Hospital"
        
        />

        <ConfirmedCard
         doctorName="Dr. Michael Ade"
            department="Cardiology"
            date="Jan 25, 2025"
            time="2:00 PM"
            status="confirmed"
            location="Room 101, Heart Center"
        />

        <ConfirmedCard
         doctorName="Dr. Helen Ojo"
            department="Pediatrics"
            date="Jan 12, 2025"
            time="9:00 AM"
            status="confirmed"
            location="Room 305, Children's Wing"
        />

        <ConfirmedCard
         doctorName="Dr. Ife Ayobami"
            department="General Medicine"
            date="Dec 5, 2024"
            time="11:00 AM"
            status="confirmed"
            location="Room 110, General Ward"
        />
</div>
    </div>
  )
}

export default ConfirmedAppointments