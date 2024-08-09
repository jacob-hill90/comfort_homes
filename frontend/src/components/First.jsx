import React from "react";
import backgroundImage from "../assets/bg.png";

const First = () => {
  return (
    <div className="relative h-screen">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative top-[5%] left-5 md:left-12 z-0 p-5 bg-white opacity-70 rounded-lg shadow-xl w-[90%] md:w-2/6">
        {/* Visible on small screens */}
        <p className="sm:text-lg leading-relaxed block sm:hidden">
          From cozy cottages nestled in serene neighborhoods to spacious urban
          lofts in the heart of vibrant cities, we offer a diverse range of
          accommodations to suit every taste and budget!
        </p>

        {/* Hidden on small screens */}
        <p className="sm:text-lg leading-relaxed hidden sm:block">
          Discover your perfect rental in Southeast Michigan with our curated
          selection of properties. From cozy cottages nestled by serene
          neighborhoods to spacious urban lofts in the heart of vibrant cities,
          we offer a diverse range of accommodations to suit every taste and
          budget. Experience the charm of the region like a local, with easy
          access to renowned attractions, picturesque landscapes, and endless
          entertainment options. Inquire about your new home today and create
          unforgettable memories in Ann Arbor, Michigan!
        </p>
      </div>
    </div>
  );
};

export default First;
