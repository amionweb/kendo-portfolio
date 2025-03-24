import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";

// KendoReact components (free tier)
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { Fade } from "@progress/kendo-react-animation";
import { Button } from "@progress/kendo-react-buttons";
import { Avatar } from "@progress/kendo-react-layout";
import { useState } from "react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // State to track active testimonial in mobile view
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      content:
        "Working with John was an absolute pleasure. His technical expertise and attention to detail transformed our vision into reality. The end result exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCo",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      content:
        "John's ability to understand complex requirements and deliver elegant solutions is remarkable. His work on our platform significantly improved user engagement.",
      rating: 4,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder of DesignHub",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      content:
        "The level of professionalism and technical skill John brings to projects is outstanding. He's not just a developer, but a true problem solver.",
      rating: 5,
    },
  ];

  // Navigate through testimonials on mobile
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Render stars based on rating
  const renderRating = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Client Testimonials
          </h2>

          {/* Desktop View - Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Fade
                key={index}
                enter={inView}
                transitionEnterDuration={300}
                // delay={index * 150}
              >
                <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg h-[320px] bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden">
                  <CardBody className="p-6 flex flex-col relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-2 right-4 text-indigo-600 dark:text-indigo-400">
                      <Quote size={32} />
                    </div>

                    {/* Avatar & User Info */}
                    <div className="flex items-center mb-4">
                      <Avatar
                        type="image"
                        className="mr-4 w-14 h-14 rounded-full overflow-hidden"
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {renderRating(testimonial.rating)}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-600 dark:text-gray-300 italic flex-grow">
                      "{testimonial.content}"
                    </p>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </div>

          {/* Mobile View - Carousel Style */}
          <div className="md:hidden">
            <Fade enter={inView} transitionEnterDuration={300}>
              <Card className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
                <CardBody className="p-6">
                  <div className="absolute -top-2 right-4 text-indigo-600 dark:text-indigo-400">
                    <Quote size={32} />
                  </div>

                  <div className="flex items-center mb-4">
                    <Avatar
                      type="image"
                      className="mr-4 w-12 h-12 rounded-full overflow-hidden"
                    >
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonials[activeIndex].name}
                      </CardTitle>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {renderRating(testimonials[activeIndex].rating)}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div className="flex justify-between mt-4">
                    <Button
                      onClick={handlePrev}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border-none px-4 py-2 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800"
                    >
                      Previous
                    </Button>
                    <div className="flex items-center">
                      {testimonials.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 mx-1 rounded-full ${
                            activeIndex === i
                              ? "bg-indigo-600 dark:bg-indigo-400"
                              : "bg-gray-300 dark:bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      onClick={handleNext}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border-none px-4 py-2 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800"
                    >
                      Next
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
