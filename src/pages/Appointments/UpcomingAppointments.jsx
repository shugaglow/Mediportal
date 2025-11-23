import React from 'react'
import UpcomingCards from './UpcomingCards'



function UpcomingAppointments() {
  return (
    <div className='p-4 bg-white'>

        <div>
            <h2 className='text-lg md:text-xl font-semibold'>Upcoming Appointments</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-6'>Here are your scheduled upcoming appointments.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <UpcomingCards
             doctorName="Dr. Sarah Johnson"
            department="Dermatology"
            date="Feb 10, 2025"
            time="10:30 AM"
            status="upcoming"
            location="Room 204, Main Hospital"/>

            <UpcomingCards
             doctorName="Dr. Michael Ade"
            department="Cardiology"
            date="Jan 25, 2025"
            time="2:00 PM"
            status="upcoming"
            location="Room 101, Heart Center"/>

            <UpcomingCards
             doctorName="Dr. Helen Ojo"
            department="Pediatrics"
            date="Jan 12, 2025"
            time="9:00 AM"
            status="upcoming"
            location="Room 305, Children's Wing"/>

            <UpcomingCards
             doctorName="Dr. Ife Ayobami"
            department="General Medicine"
            date="Mar 5, 2025"
            time="11:00 AM"
            status="upcoming"
            location="Room 110, General Ward"/>

            <UpcomingCards
             doctorName="Dr. Eno Ikpe"
            department="Orthopedics"
            date="Mar 20, 2025"
            time="3:30 PM"
            status="upcoming"
            location="Room 220, Orthopedic Center"/>

            <UpcomingCards
             doctorName="Dr. Phil Ken"
            department="Neurology"
            date="Apr 15, 2025"
            time="1:00 PM"
            status="upcoming"
            location="Room 330, Neuro Wing"/>

            <UpcomingCards
             doctorName="Dr. Sarah Daniels"
            department="Gynecology"
            date="Apr 28, 2025"
            time="10:00 AM"
            status="upcoming"
            location="Room 440, Women's Health Center"/>
            
        </div>
    </div>
  )
}

export default UpcomingAppointments