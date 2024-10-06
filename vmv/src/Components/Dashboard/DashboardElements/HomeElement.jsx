import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardComponent = () => {
  return (
    <a
      href="/form"
      className="flex flex-col items-center bg-black border border-gray-200 rounded-lg shadow dark:border-gray-700 max-w-sm"
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          Create Tax Invoices for VMV
        </h5>
        <p className="font-normal text-gray-300">
          Generate accurate and compliant tax invoices tailored for VMV's business needs.
        </p>
      </div>
      {/* Button wrapper */}
      <div className="flex justify-center w-full p-4">
        <button
          type="button"
          className="flex items-center rounded-lg bg-white px-6 py-3 text-black font-semibold transition duration-300 ease-in-out shadow-lg"
        >
          Create Invoices
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
        </button>
      </div>
    </a>
  );
};

export default CardComponent;
