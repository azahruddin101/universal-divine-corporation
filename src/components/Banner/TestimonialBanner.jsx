import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testImage from '../../assets/testimonialImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    username: "Sarah Johnson",
    review: "Absolutely amazing service! The team went above and beyond my expectations. Their attention to detail and dedication to quality is remarkable.",
    date: "2024-03-15",
    image: testImage[0]
  },
  {
    id: 2,
    username: "Michael Chen",
    review: "I've worked with many companies before, but this one stands out. Their innovative approach and professional attitude made the whole process seamless.",
    date: "2024-03-10",
    image: testImage[1]
  },
  {
    id: 3,
    username: "Emma Wilson",
    review: "The level of expertise and customer service is exceptional. They truly understand what clients need and deliver beyond expectations.",
    date: "2024-03-05",
    image: testImage[2]
  },
  {
    id: 4,
    username: "David Brown",
    review: "Outstanding experience from start to finish. The team's communication was excellent, and the results exceeded our expectations.",
    date: "2024-02-28",
    image: testImage[0]
  },
  {
    id: 5,
    username: "Lisa Martinez",
    review: "Incredibly professional and efficient. They took our vision and transformed it into reality with precision and creativity.",
    date: "2024-02-25",
    image: testImage[1]
  },
  {
    id: 6,
    username: "James Taylor",
    review: "The best decision we made for our project. Their expertise and dedication to excellence is evident in every aspect of their work.",
    date: "2024-02-20",
    image: testImage[2]
  },
  {
    id: 7,
    username: "Anna Rodriguez",
    review: "Phenomenal service and results. The team's innovative solutions and attention to detail made our project a huge success.",
    date: "2024-02-15",
    image: testImage[0]
  },
  {
    id: 8,
    username: "Robert Kim",
    review: "Exceptional quality and service. They consistently delivered beyond our expectations and were a pleasure to work with.",
    date: "2024-02-10",
    image: testImage[1]
  },
  {
    id: 9,
    username: "Emily Davis",
    review: "Truly impressed with their expertise and professionalism. They made the entire process smooth and delivered outstanding results.",
    date: "2024-02-05",
    image: testImage[2]
  },
  {
    id: 10,
    username: "Thomas Anderson",
    review: "Brilliant work and exceptional service. Their team's dedication and expertise made our project a remarkable success.",
    date: "2024-02-01",
    image: testImage[0]
  }
];

const TestimonialSlider = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Custom styles for Swiper navigation buttons
  const navigationStyles = `
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px !important;
      height: 40px !important;
      background: white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      display: none;
    }

    .swiper-button-disabled {
      opacity: 0 !important;
    }

    .swiper-pagination-bullet-active {
      background: #2d907c !important;
    }
  `;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <style>{navigationStyles}</style>
      
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={isMobile ? 1 : 2}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          grabCursor={true}
          className="py-8"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.username}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <h3 className="font-semibold text-lg">{testimonial.username}</h3>
                  <p className="text-gray-600 flex-grow">{testimonial.review}</p>
                  <p className="text-sm text-gray-400">{formatDate(testimonial.date)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 cursor-pointer">
            <div className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 cursor-pointer">
            <div className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;