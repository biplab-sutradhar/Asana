import React, { useEffect, useState } from 'react';
import desktopImg from '../asset/desk.jpg'
import mobileImg from '../asset/mobile.png'
import { PiChatsCircleLight } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineDocumentPlus } from "react-icons/hi2";

const HeroSection = () => {
    const [bgImg, setBgImg] = useState(mobileImg); // default image is for mobile

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <= 640)
                setBgImg(mobileImg);
            else
                setBgImg(desktopImg);
        }
        handleResize(); // initial resize on component mount
        window.addEventListener('resize', handleResize); // add event listener for future resizes
        return () => window.removeEventListener('resize', handleResize); // cleanup event listener on component unmount
    }, []);

    return (
        <div> 

        <div
        className="flex flex-col justify-center p-6 text-white min-h-[600px] w-screen bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="relative flex flex-col items-start justify-center py-6 gap-3 ">
                <h2 className='font-extralight text-lg '>
                    Namaste, Welcome to Amrutam
                </h2>
                <h1 className='font-bold text-3xl  mt-2 '>
                    Step into Holistic Healing with Ayurveda <br /> Book Consultation with certified Experts
                </h1>
                <h3 className='text-xs font-light mt-4'>
                    Dive into the world of ayurveda and Experience Personalized Health Solutions and <br /> Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.
                </h3>
            </div>
            <button className=' bg-green-700 w-fit p-2 rounded-lg'>
            Book an Appointment
            </button>
        </div>
        <div className=' w-full bg-[#FFF7E2] flex flex-col md:flex-row py-3 justify-center gap-3'>
            <div className='  flex items-center justify-center'><PiChatsCircleLight className=' border p-2 rounded-full ' size={50}/> <p className='mx-2 w-56 text-green-600'>convenient online & In-clinic consultations </p> </div>
            <div className=' flex items-center justify-center'><IoShieldCheckmarkOutline className=' border p-2 rounded-full ' size={50}/><p className='mx-2 w-56 text-green-600'>Safe and effective treatment</p></div>
            <div className=' flex items-center justify-center'><FaUserDoctor className=' border p-2 rounded-full ' size={50}/><p className='mx-2 w-56 text-green-600'>Experienced Ayurvedic Practitioners </p> </div>
            <div className=' flex items-center justify-center'><HiOutlineDocumentPlus className=' border p-2 rounded-full ' size={50}/> <p className='mx-2 w-56 text-green-600'>personalized Treatment Plans & Guidance</p></div>

        </div>
        </div> 

    );
};
export default HeroSection;
