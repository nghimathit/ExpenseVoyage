import React, { useEffect, useState } from 'react';

const TAB_URL = [
  { id: 1, url: "https://wanderlog.com/assets/LandingPageProductAnimation__card1.jpg" },
  { id: 2, url: "https://wanderlog.com/assets/LandingPageProductAnimation__card2.jpg" },
  { id: 3, url: "https://wanderlog.com/assets/LandingPageProductAnimation__card3.jpg" },
  { id: 4, url: "https://wanderlog.com/assets/LandingPageProductAnimation__card3.jpg" }
];

const Itinerary = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        const nextIndex = prev.length < TAB_URL.length ? prev.length + 1 : 1;
        return TAB_URL.slice(0, nextIndex);
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full flex gap-3'>
      <div className='w-1/2 relative'>
        <img className='w-full h-[21vw]' src='https://wanderlog.com/assets/LandingPageProductAnimation__background.jpg' />
        <div className='absolute top-1 col-sm-3 gap-2'>
          {
            visibleImages.map((imgUrl) => {
              return <img key={imgUrl.id} className='w-[25vw] h-[5vw] left-3 rounded-lg' src={imgUrl.url} />;
            })
          }
        </div>
      </div>
      <div className='w-1/2 text-black'>
        <h1 className='font-bold text-[2.5vw] px-5'>Your itinerary and your map in one view</h1>
        <p className='font-thin text-[2vw] p-5'>No more switching between different apps, tabs, and tools to keep track of your travel plans.</p>
      </div>
    </div>
  );
}

export default Itinerary;
