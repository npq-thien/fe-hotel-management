import React from 'react';
import Dropdown from './Dropdown'; // Ensure you have imported the Dropdown component correctly

const App = () => {
  const dropdownRooms = [
    { label: 'Single bedroom', href: '#' },
    { label: 'Double bedroom', href: '#' },
    { label: 'Deluxe Room', href: '#' },
    { label: 'Family Room', href: '#' },
    { label: 'Suite', href: '#' },
  ];

  const dropdownGuests = [
    { label: '1', href: '#' },
    { label: '2', href: '#' },
    { label: '3', href: '#' },
    { label: '4', href: '#' },
    { label: '5', href: '#' },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-6xl gap-2 bg-gray-800 text-white p-4">
        <div className="flex flex-col rounded-xl items-center justify-center border border-stone-700 gap-2 p-5">
          CHECK-IN
          <input type="date" className="text-black p-1 rounded-md " />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-5">
          CHECK-OUT
          <input type="date" className="text-black p-1 rounded-md" />
        </div>
        <div className="z-20 flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-5">
          ROOM TYPE
          <Dropdown title="Single bedroom" items={dropdownRooms} />
        </div>
        <div className="z-10 flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-5">
          GUESTS
          <Dropdown title="1" items={dropdownGuests} />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center bg-secondary gap-2 p-4 md:col-span-2 lg:p-5 lg:col-span-1 hover:cursor-pointer">
          <button className="text-2xl font-semibold p-2 rounded">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
