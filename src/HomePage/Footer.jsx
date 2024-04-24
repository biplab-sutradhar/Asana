import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="bg-[#daebda] p-10 w-full flex justify-center items-center flex-col rounded-md   mx-auto">
      <div className="mb-6">
        <p className="text-green-800 text-lg font-bold">Get in touch</p>
        <p className="text-gray-700">support@amrutam.co.in</p>
        <p className="text-gray-700">
          Amrutam Pharmaceuticals Pvt Ltd.,<br />
          chiragupil ganj, Nai Sadak, Lashkar,<br />
          Gwalior - 474001
        </p>
        <p className="text-gray-700">+91 9713171999</p>
      </div>

      <div className="flex gap-2 justify-between mb-6">
        <a href="#" className="text-white p-2 bg-green-800 rounded-full hover:text-gray-800">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-white p-2 bg-green-800 rounded-full hover:text-gray-800">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-white p-2 bg-green-800 rounded-full hover:text-gray-800">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-white p-2 bg-green-800 rounded-full hover:text-gray-800">
          <FaYoutube size={24} />
        </a>
        <a href="#" className="text-white p-2 bg-green-800 rounded-full hover:text-gray-800">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="text-white p-2 bg-green-800 rounded-full hover:text-gray-800">
          <FaPinterest size={24} />
        </a>
      </div>

      <ul className="mb-6">
        <li className="mb-2">
          <a href="#" className="text-gray-700 text-xl hover:text-gray-900">
            Information
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Terms and Conditions
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Privacy Policy
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Privacy Policy for Mobile Apps
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Shipping and Returns Policy
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            International Delivery
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            For Businesses, Hotels and Resorts
          </a>
        </li>
      </ul>

      <div className="flex rounded-full w-80 items-center mb-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="flex-grow px-3 py-2 border border-gray-400 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-gray-800 text-white p-2 rounded-r-full hover:bg-gray-700">
          Subscribe
        </button>
      </div>
      <p className="text-gray-700 my-4">
        Subscribe to our Newsletter and join<br />
        Amrutam Family today!
      </p>
    </div>
  );
};

export default ContactInfo;