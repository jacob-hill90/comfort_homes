import React from "react";

const FAQ = () => {
  return (
    <div className="container-fluid lg:h-screen mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center underline">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            What amenities are included?
          </h2>
          <p className="text-gray-700">
            Our rental property offers a range of amenities including high-speed
            internet, cable TV, fully equipped kitchen, washer and dryer, and
            access to the community pool and gym.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Is parking available?</h2>
          <p className="text-gray-700">
            Yes, we provide dedicated parking spaces for our tenants. Each
            rental unit comes with assigned parking spots for residents.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Are pets allowed?</h2>
          <p className="text-gray-700">
            Unfortunately, we do not allow pets in our rental units. This policy
            is to ensure the comfort and safety of all residents.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            What is the lease duration?
          </h2>
          <p className="text-gray-700">
            We offer flexible lease durations to accommodate our tenants' needs.
            Typically, leases are for a minimum of 6 months, but longer-term
            leases can also be arranged.
          </p>
        </div>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
};

export default FAQ;
