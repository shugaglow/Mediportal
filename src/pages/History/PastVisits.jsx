import React from 'react'
import CheckupCard from './CheckupCard'

function PastVisits() {
  return (
    <div className='px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <CheckupCard
            title="Annual Skin Checkup"
            date="April 28, 2025"
            doctor="Dr. Emily Roberts"
            diagnosis="Routine examination - no issues found"
            notes="Continue with regular sunscreen use"
            />

            <CheckupCard
            title="Follow-up for Hypertension"
            date="March 15, 2025"
            doctor="Dr. Michael Lee"
            diagnosis="Blood pressure well-controlled"
            notes="Maintain current medication and diet"
            />

            <CheckupCard
            title="Flu Symptoms Consultation"
            date="January 10, 2025"
            doctor="Dr. Sarah Johnson"
            diagnosis="Influenza - prescribed antiviral medication"
            notes="Rest and hydration recommended"
            />

            <CheckupCard
            title="Diabetes Management Review"
            date="December 5, 2024"
            doctor="Dr. David Kim"
            diagnosis="Type 2 Diabetes - stable condition"
            notes="Adjust diet and increase physical activity"
            />

            <CheckupCard
            title="Allergy Testing"
            date="November 20, 2024"
            doctor="Dr. Laura Smith"
            diagnosis="Allergic rhinitis - positive for pollen and dust mites"
            notes="Prescribed antihistamines and advised on allergen avoidance"
            />

            <CheckupCard
            title="Routine Physical Exam"
            date="October 15, 2024"
            doctor="Dr. James Wilson"
            diagnosis="Overall good health"
            notes="Continue regular exercise and balanced diet"
            />

        </div>
    </div>
  )
}

export default PastVisits