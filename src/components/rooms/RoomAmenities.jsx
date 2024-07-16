import React from 'react'

const RoomAmenities = ({ amenitiesData }) => {
  return (
    <div className='w-3/4 max-w-4xl mx-auto bg-gray-100 rounded-lg p-4'>
      <h2 className='h3-bold mb-4 font-serif tracking-wider text-primary'>Amenities</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {amenitiesData.amenities.map((item, index) => (
          <li key={index} className='text-dark-3'>
            &bull; {item}
          </li>
        ))}
      </div>
    </div>
  )
}

export default RoomAmenities