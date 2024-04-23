import React from 'react'
import consultImg from '../asset/consultant.png'

const Consultant = () => {
  return (
    <div
    className="bg-center bg-cover h-56 lg:h-96 object-fill"
    style={{ 
      backgroundImage: `url(${consultImg})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center', 
    }}
  >
    <div className="bg-black bg-opacity-50 h-full w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl text-center text-yellow-100 font-extrabold">Ready to restore harmony in <br /> your mind, body and spirit?</h1>
      <button className=' p-2 w-fit bg-green-800 rounded-xl'>Book a consultation</button>
    </div>
  </div>
  
  )
}

export default Consultant