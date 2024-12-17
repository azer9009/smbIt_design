import React from 'react';

const CoustomIcon = () => {
  const icons = ['fa-twitter', 'fa-facebook', 'fa-linkedin-in', 'fa-instagram'];

  return (
    <div className="flex space-x-4">
      {icons.map((item, index) => (
        <div key={index} className="bg-transparent rounded-md border hover:bg-[#0ea5e9] duration-200 border-white border-opacity-35  w-5 h-5 p-4 cursor-pointer flex items-center justify-center">
          <i className={`fa-brands ${item} text-md text-white `} />
        </div>
      ))}
    </div>
  );
};

export default CoustomIcon;
