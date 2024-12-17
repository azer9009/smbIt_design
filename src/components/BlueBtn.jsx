import React from 'react';

const BlueBtn = ({ children, className }) => {
  return (
    <button className={`bg-[#0EA5E9] max-w-[250px] px-[32px] py-[10px] text-white rounded-[12px] hover:bg-[#0a6c99] duration-300 ${className}`}>
      {children}
    </button>
  );
}

export default BlueBtn;
