import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import doctor from '../asset/doctor.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MeetExperts = () => {
  const experts = [
    {
      id: 1,
      name: 'Dr. Vaibhali Sharma',
      experience: '25 years of experience',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Dr. Vaibhali Sharma',
      experience: '22 years of experience',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Dr. Vaibhali Sharma',
      experience: '20 years of experience',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Dr. Vaibhali Sharma',
      experience: '18 years of experience',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Dr. Vaibhali Sharma',
      experience: '15 years of experience',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 pt-16 flex flex-col justify-center ">
      <h2 className="text-2xl font-bold text-center mb-8">Meet Our Ayurveda Experts</h2>
      <Slider ref={sliderRef} {...settings}>
        {experts.map((expert) => (
          <div key={expert.id} className="mx-2 flex  justify-center">
            <div className="bg-[#FFF7E2] shadow-md rounded-lg rounded-b-none p-6 text-center w-64">
              <img src={doctor} alt={expert.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{expert.name}</h3>
              <p className="text-gray-600">{expert.experience}</p>
             
            </div>
            <button className="bg-green-800 w-64 text-white py-2 px-4 w-full rounded-b-full ">
                Book a Session
              </button>
          </div>
        ))}
      </Slider>
      <div className="flex flex-col justify-center items-center gap-3 mt-4">
        <div>
           <button onClick={previous} className="text-2xl text-green-600 bg-white p-2 rounded-full shadow-md mr-4">
          <FaArrowLeft />
        </button>
        <button onClick={next} className="text-2xl text-green-600 bg-white p-2 rounded-full shadow-md">
          <FaArrowRight />
        </button>
        </div>
      <button className=' w-48 p-2 bg-green-100 opacity-80 flex justify-center items-center'>Find more experts <FaArrowRight/></button>
       
      </div>

    </div>
  );
};

export default MeetExperts;
