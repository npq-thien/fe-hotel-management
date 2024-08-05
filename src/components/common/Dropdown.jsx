import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ title, items, width, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(title);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // console.log('widthne' + items[0].label + width);

  return (
    <div className="relative text-left mx-auto">
      <div>
        <button
          type="button"
          // className={`flex text-center justify-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-gray-700 focus:outline-none ${width ? `w-${width}` : 'w-full'}`}
          className={`inline-flex text-center justify-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-gray-700 focus:outline-none ${width ? `w-${width}` : 'w-full'}`}
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-2">
            {selectedValue ? selectedValue : title}
            <IoMdArrowDropdown />
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          // className={`origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-44 ${width ? `w-${width}` : 'w-full'}`}
          className={`absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${width ? `w-${width}` : 'w-full'}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">  
            {items.map((item, index) => (
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                key={index}
                onClick={() => {
                  setSelectedValue(item.label);
                  setIsOpen(false);
                  // we mimics the target.value.item for the other component
                  // can get this value when it change
                  onChange({ target: { value: item.label } });
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
