import React from 'react';

const Spinner = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div class="py-4 rounded shadow-md  animate-pulse bg-gray-50 ">
        <div class="flex p-4 space-x-4 sm:px-8">
          <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gray-300"></div>
          <div class="flex-1 py-2 space-y-4">
            <div class="w-full h-3 rounded bg-gray-300"></div>
            <div class="w-5/6 h-3 rounded bg-gray-300"></div>
          </div>
        </div>
        <div class="p-4 space-y-4 sm:px-8">
          <div class="w-full h-4 rounded bg-gray-300"></div>
          <div class="w-full h-4 rounded bg-gray-300"></div>
          <div class="w-3/4 h-4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
