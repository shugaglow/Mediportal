import React from 'react'
import LabResultCard from './LabResultCard'
import TopComponent from '../../components/TopComponent'

function LabResults() {
  return (
    <div className=' px-4'>

        <div className=''>

          <div className=''>
            <h2 className='text-lg md:text-xl font-semibold'>Lab Results</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-2'>Quickly review your laboratory test outcomes, check normal ranges, and download reports for future reference or doctor consultations.</p>
        </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <LabResultCard
            testName="Complete Blood Count (CBC)"
            date="May 1, 2025"
            doctor="Dr. Sarah Johnson"
            status="Normal"
            onDownload={() => alert("Downloading report...")}
            />

            <LabResultCard
            testName="Lipid Panel"
            date="April 15, 2025"
            doctor="Dr. Michael Lee"
            status="High"
            onDownload={() => alert("Downloading report...")}
            />

            <LabResultCard
            testName="Thyroid Function Test"
            date="March 30, 2025"
            doctor="Dr. Emily Roberts"
            status="Normal"
            onDownload={() => alert("Downloading report...")}
            />

            <LabResultCard
            testName="Liver Function Test"
            date="March 10, 2025"
            doctor="Dr. David Kim"
            status="Raised"
            onDownload={() => alert("Downloading report...")}
            />

        </div>
    </div>
  )
}

export default LabResults