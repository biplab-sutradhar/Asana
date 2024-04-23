import React, { useEffect, useState } from 'react'
import yoga from '../asset/yoga.png'
import { TbHeartPlus } from "react-icons/tb";
import { LiaHandsSolid } from "react-icons/lia";
import { GrYoga } from "react-icons/gr";
import { TbRibbonHealth } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";

import { FaHeartbeat, FaLeaf, FaHeart, FaBriefcaseMedical, FaSeedling, FaShieldAlt } from 'react-icons/fa';


const WalletSetup = () => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  const cards = [
    {
      icon: <FaHeartbeat />,
  title: 'Personalized Wellness',
  text: 'Treatments made just for you based on your individual doshas, (body type)',
},
{
  icon: <FaLeaf />,
  title: 'Focus on prevention',
  text: 'Stop problems even before they start.',
},
{
  icon: <FaHeart />,
  title: 'Mind-Body Connection',
  text: 'Keep your mind and body in sync for a happy life.',
},
{
  icon: <FaBriefcaseMedical />,
  title: 'Holistic Healing',
  text: 'Fix the root problem for long-lasting health.',
},
{
  icon: <FaSeedling />,
  title: 'Natural Remedies',
  text: 'Using herbs and natural therapies for healing.',
},
{
  icon: <FaShieldAlt />,
  title: 'Boosting immunity',
  text: 'Stay strong and healthy for life; not just for today.',
},
];

  return (
    <div>
  <h1 className='text-center text-green-700 font-bold text-2xl'>
    Discover Ayurveda's magic with us
  </h1>

  <p className='text-gray-500 text-center my-4'>
    Ayurvedic treatment aims to balance your body and mind, bringing harmony <br />
    and vitality. It's like a journey to better health using ancient wisdom, <br />
    a totally effective approach for a better life.
  </p>

  {windowWidth > 1224 ? (
  <div className='flex justify-center items-center my-8 h-[410px]'>
    <div className='flex flex-col h-full justify-between items-end gap-4 w-1/3'>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='text-green-700 font-semibold'>Personalized Wellness</h2>
        <p className='text-gray-500 flex items-center'>
          Get treatments made just for you based on your individual doshas (body type)
          <TbHeartPlus className='border p-2 rounded-full text-green-700 ml-0.5 size-10' />
        </p>
      </div>

      <div className='flex items-center justify-center pr-8 flex-col'>
        <h2 className='text-green-700 font-semibold'>Holistic Healing</h2>
        <p className='text-gray-500 flex items-center'>
          Fix the root problem for long-lasting health
          <TbRibbonHealth className='border p-2 rounded-full text-green-700 ml-2 size-10' />
        </p>
      </div>

      <div className='flex items-center flex-col justify-center'>
        <h2 className='text-green-700 font-semibold'>Focus on prevention</h2>
        <p className='text-gray-500 flex items-center'>
          Stop problems even before they start.
          <GrYoga className='border p-2 rounded-full text-green-700 ml-2 size-10' />
        </p>
      </div>
    </div>

    <div className='w-fit rounded-full'>
      <img src={yoga} alt="yoga" className='size-96' />
    </div>

    <div className='flex flex-col items-start justify-between gap-4 h-full w-1/3'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-green-700 font-semibold'>Mind-Body Connection</h2>
        <p className='text-gray-500 flex items-center'>
          <TbHeartPlus className='border p-2 rounded-full text-green-700 mr-2 size-10' />
          Treat your mind and body together for complete harmony
        </p>
      </div>

      <div className='flex flex-col pl-8 items-center justify-center gap-2'>
        <h2 className='text-green-700 font-semibold'>Natural Remedies</h2>
        <p className='text-gray-500 flex items-center'>
          <TbRibbonHealth className='border p-2 rounded-full text-green-700 mr-2 size-10' />
          Rely on nature's healing power
        </p>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-green-700 font-semibold'>Boosting Immunity</h2>
        <p className='text-gray-500 flex items-center'>
          <GrYoga className='border p-2 rounded-full text-green-700 mr-2 size-10' />
          No pill or treatment can beat the power of a strong immunity
        </p>
      </div>
    </div>
  </div>
  ) : (
  <div>
  <div className='w-fit rounded-full'>
      <img src={yoga} alt="yoga" className='size-96' />
    </div>
    <div className="grid  grid-cols-2  gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center text-center"
        >
          <div className="text-4xl  text-green-600 mb-4">{card.icon}</div>
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.text}</p>
        </div>
      ))}
    </div>

  </div>) }
</div>
  )
}

export default WalletSetup