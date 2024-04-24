import React from 'react';
import consultantImg1 from '../asset/consultant1.png';
import consultantImg2 from '../asset/consultant2.jpg';
import consultantImg3 from '../asset/consultant3.jpg';

const AyurvedicConsultations = () => {
  return (
    <div className="bg-green-100 w-screen p-8">
      <h1 className="text-3xl font-bold mb-6">What sets Ayurvedic consultations apart?</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10  flex justify-center items-center">
        <div className="md:col-span-2 col-span-1 h-64 ">
          <div className="bg-white p-6 rounded-lg  shadow-md h-full ">
            <h2 className="text-xl font-bold mb-2">स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h2>
            <p className="text-gray-700">
              Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person.
            </p>
          </div>
        </div>
        <div className="col-span-1  flex justify-center items-center">
          <img src={consultantImg1} alt="" className=" md:h-64 h-80" />
        </div>
        <div className="col-span-1 h-64">
          <div className="bg-white p-6 rounded-lg shadow-md h-full flex-col  flex justify-center items-center">
            <h2 className="text-xl font-bold mb-2">Precise Diagnosis</h2>
            <p className="text-gray-700">
              Ayurveda's core principles revolve around Vata, Pittaml, and Kapha doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-64 flex justify-center items-center">
          <div className="bg-white h-full p-6  rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Zero side-effects</h2>
            <p className="text-gray-700">
              Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-64 flex justify-center items-center">
          <img src={consultantImg2} alt="Zero side-effects" className='  md:h-64 h-80' />
        </div>
        <div className="col-span-1 h-64 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md  h-full">
            <h2 className="text-xl font-bold mb-2">Individual Treatment</h2>
            <p className="text-gray-700">
              All Treatments are personalized based on a person's unique constitution and health concerns.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-64 mb-2 flex justify-center items-center">
          <img src={consultantImg3} alt="individual treatment" className='  md:h-64 h-80' />
        </div>
      </div>
    </div>
  );
};

export default AyurvedicConsultations;