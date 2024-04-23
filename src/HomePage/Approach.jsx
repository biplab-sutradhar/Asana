
import React from 'react';

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

  return (
    <div className="bg-gray-100 py-16 flex justify-center flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-8 text-green-900">Our Ayurvedic Approach</h2>
      <p className="text-gray-600  mb-12 text-gray-600 w-1/2 text-center">
        At Amavya, we follow a unique and personalized approach to healing. Our expert
        team uses an evidence-based system for rebalancing a person's doshas to restore
        physical, body, mind, mental, history and current health conditions.
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#FFF7E2] rounded-lg shadow-md p-6 text-center flex justify-center flex-col items-center"
            >
              <h1 className=' size-12 rounded-full bg-green-800 opacity-60 text-white flex justify-center items-center text-3xl'>{step.id}</h1>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;