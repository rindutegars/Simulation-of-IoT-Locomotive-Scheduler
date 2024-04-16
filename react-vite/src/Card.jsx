import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, value, icon, iconStyle, style, persen }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <a href="#" className={`block p-7`}>
          <div className="flex justify-between">
            {icon && (
              <div className="flex-none">
                {React.cloneElement(icon, { className: `h-7 w-7 ${iconStyle}` })}
              </div>
            )}
            <div className={`${style} rounded-full h-6 px-2 flex justify-center items-center text-white font-semibold text-sm`}>
              <span className="flex items-center">{persen}%</span>
            </div>
          </div>
          <div className="mt-3 text-3xl font-bold leading-8">{value}</div>
          <div className="mt-1 text-base text-gray-600 font-semibold">{title}</div>
        </a>
      </div>   
    </div>      
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element, // Menambahkan properti icon sebagai elemen
  iconStyle: PropTypes.string, // Tambahkan properti iconStyle
  style: PropTypes.string, // Tambahkan properti style
  persen: PropTypes.number.isRequired // Tambahkan properti persen dan pastikan diisi dengan nilai number
};

export default Card;
