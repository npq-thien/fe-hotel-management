import React from 'react';
import Dropdown from './Dropdown'; // Ensure you have imported the Dropdown component correctly

const App = () => {
  const dropdownItems = [
    { label: 'Single Room', href: '#' },
    { label: 'Double Room', href: '#' },
    { label: 'Deluxe Room', href: '#' },
    { label: 'Suite', href: '#' },
    { label: 'Family Room', href: '#' },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-6xl gap-2 bg-gray-800 text-white p-4">
        <div className="flex flex-col rounded-xl items-center justify-center border border-stone-700 gap-2 p-5">
          CHECK-IN
          <input type="date" className="bg-slate-400 p-1" />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-10">
          CHECK-OUT
          <input type="date" className="bg-slate-400 p-1" />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-10">
          ROOM TYPE
          <Dropdown title="Room types" items={dropdownItems} />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-10">
          GUESTS
          <Dropdown title="Room types" items={dropdownItems} />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center bg-secondary gap-2 p-4 md:col-span-2 lg:p-10 lg:col-span-1 hover:cursor-pointer">
          <button className="text-2xl font-semibold p-2 rounded">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
