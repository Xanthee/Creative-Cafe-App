
import React from 'react';
import SimpleMap from '../components/Map.jsx';


const LocationPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#24402E]">
      <div className="mt-40">
        <h1 className="text-4xl mb-2 letter-spacing text-white text-center mb-20 underline underline-offset-8">OUR LOCATION</h1>
        <SimpleMap />
        
      </div>
    </div>
  );
};

export default LocationPage;
