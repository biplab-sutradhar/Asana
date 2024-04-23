import React from 'react'
import showApp from '../asset/showApp.jpg'
import google from '../asset/google.jpg'
import apple from '../asset/apple.jpg'

const ShowApp = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse'>
      <div className='bg-[#FFF7E2] md:w-2/3 w-full'>
        <div class="flex flex-col justify-center items-center rounded-lg  p-4 h-full md:h-96">
          <h1 class="text-2xl text-green-800 font-bold">Amrutam Home App</h1>
          <p className='text-gray-700  text-sm w-2/3'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
          <h2 className=' text-lg'>
            Get a diet & lifestyle consultation with ayurvedic experts across the globe 
          </h2>
          <button className="bg-green-700 text-white rounded px-4 py-2 mt-4">Get The App Now</button>
        </div>
      </div>
      <div className='md:w-1/3 w-full'>
        <img src={showApp} alt="App.." className='w-full h-auto object-cover object-center'/>
      </div>
    </div>
  )
}

export default ShowApp
