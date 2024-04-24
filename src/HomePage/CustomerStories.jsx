import React from 'react';

const CustomerStories = () => {
  const stories = [
    {
      id: 1,
      expertices: "Consulted for Skin",
      name: 'Sophia Moura',
      rating: 5,
      quote: 'One of a kind service!',
      description: 'I received great tips from the experts to adjust my routine for better well-being.',
    },
    {
      id: 2,
      expertices: "Consulted for Skin",
      name: 'Sophie Moura',
      rating: 4,
      quote: 'One of a kind service',
      description: 'I found it very helpful to understand the root cause of my health issues and get an Ayurvedic perspective.',
    },
    {
      id: 3,
      expertices: "Consulted for Skin",
      name: 'Sophia Moura',
      rating: 5,
      quote: 'One of a kind service',
      description: 'I chose them to create a personalized wellness plan and I am very satisfied!',
    },
  ];

  return (
    <div className="bg-[#FFF7E2] py-16">
      <h2 className="text-3xl text-green-800 font-bold text-center mb-8">Stories from our valued customers!</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {stories.map((story) => (
            <div>
              <div className=' w-full p-2 rounded-t-lg bg-green-100'>
                {story.expertices}
              </div>

            
            <div key={story.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-white font-bold"> 
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{story.name}</h3>
                  <div className="flex items-center">
                    {Array.from({ length: story.rating }, (_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{story.quote}"</p>
              <p className="text-gray-600">{story.description}</p>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;