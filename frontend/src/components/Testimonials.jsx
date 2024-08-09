import person1 from "../assets/p1.png";
import person2 from "../assets/p2.png";
import person3 from "../assets/p3.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Living here has been an amazing experience! The community is friendly, the amenities are top-notch, and the location is convenient.",
      image: person1,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I've lived here for two years now and couldn't be happier. The management is responsive, maintenance requests are handled promptly, and the apartments are spacious and well-maintained.",
      image: person2,
    },
    {
      id: 3,
      name: "Michael Johnson",
      text: "I highly recommend this place to anyone looking for a comfortable and safe living environment. The staff goes above and beyond to make sure residents are satisfied.",
      image: person3,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Tenants Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center mb-8"
            >
              <div className="w-32 h-32 mb-4">
                <img
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="bg-white w-[80%] lg:w-[50%] shadow-md rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="text-gray-800 font-semibold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
