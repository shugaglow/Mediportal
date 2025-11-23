import React from 'react'

function TopComponent({header, description}) {
  return (
     <div className='mt-16 md:mt-0'>
            <h1 className='text-xl font-bold text-blue-900'>{header}</h1>
            <p className='text-md text-gray-700'>{description}</p>
    </div>
  )
}

export default TopComponent