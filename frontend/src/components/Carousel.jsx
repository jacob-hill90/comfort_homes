import React, { useState, useEffect } from "react";
import house1 from "../assets/house-1.jpeg";
import house2 from "../assets/house-2.jpeg";
import house3 from "../assets/house-3.jpeg";
import house4 from "../assets/house-4.jpeg";

function Carousel() {
  const [modal, setModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const images = [house1, house2, house3, house4]; // Add more images as needed

  const handleClick = (increment) => {
    const newIndex =
      (currentImageIndex + increment + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      // Left arrow key
      handleClick(-1);
    } else if (event.keyCode === 39) {
      // Right arrow key
      handleClick(1);
    }
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (!touchStartX) return;
    const touchEndX = event.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const sensitivity = 50; // Adjust this value for desired sensitivity
    if (deltaX > sensitivity) {
      // Swiped right
      handleClick(-1);
      setTouchStartX(null);
    } else if (deltaX < -sensitivity) {
      // Swiped left
      handleClick(1);
      setTouchStartX(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]); // Add currentImageIndex as dependency to re-add event listener when index changes

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="container-fluid bg-sky-100 relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <h1 className="container-fluid text-center py-5 ">
          <p className="text-2xl">Homes Currently Available for Rent</p>
          <p>Click photo for more information</p>
        </h1>
        <div className="flex justify-center min-h-[auto] max-h-[80vh] relative">
          <img
            src={images[currentImageIndex]}
            onClick={() => setModal(true)}
            alt="house"
            className={`lg:px-10 lg:pb-10 ${
              isSmallScreen ? "w-[100vw] h-[50vh]" : "w-[80%] h-[auto]"
            } md:object-contain cursor-pointer rounded-lg`}
          />

          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentImageIndex === index ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          {!isSmallScreen && (
            <div className="absolute top-1/2 w-[77%] flex justify-between">
              <button
                onClick={() => handleClick(-1)}
                className="p-2 text-white bg-black bg-opacity-50 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleClick(1)}
                className="p-2 text-white bg-black bg-opacity-50 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      {modal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div
            className="w-full h-full bg-transparent"
            onClick={() => setModal(false)}
          ></div>
        </div>
      )}
    </>
  );
}

export default Carousel;
