import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Approach = () => {
  const steps = [
    {
      id: 1,
      title: 'Make Appointment',
      description: 'Book your appointment or schedule a discovery call to get started.',
    },
    {
      id: 2,
      title: 'Consultations',
      description: 'Receive an in-depth assessment through consultation with our Ayurvedic experts.',
    },
    {
      id: 3,
      title: 'Treatment Planning',
      description: 'We create a customized treatment plan based on your individual needs.',
    },
    {
      id: 4,
      title: 'Maintenance',
      description: 'Ongoing support and maintenance of your progress, adjusting as needed.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <div className="bg-gray-100 py-16 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-900">Our Ayurvedic Approach</h2>
      <p className="text-gray-600 mb-12   text-center">
        At Amavya, we follow a unique and personalized approach to healing. Our expert
        team uses an evidence-based system for rebalancing a person's doshas to restore
        physical, body, mind, mental, history and current health conditions.
      </p>
      <Slider {...settings}>
        {steps.map((step) => (
          <div key={step.id} className="flex items-center justify-center">
            <div className="bg-[#FFF7E2] w-96 rounded-lg shadow-md p-6 h-64 text-center flex items-center justify-center flex-col gap-3">
              <h1 className=" size-12 rounded-full bg-green-800 opacity-60 text-white flex justify-center items-center text-3xl">{step.id}</h1>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Approach;
