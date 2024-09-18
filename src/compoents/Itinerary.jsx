import React, { useEffect } from 'react'
import { useState } from 'react'

const TAB_URL=[
    {id:1,url:"https://wanderlog.com/assets/LandingPageProductAnimation__card1.jpg"},
    {id:2,url:"https://wanderlog.com/assets/LandingPageProductAnimation__card2.jpg"},
    {id:3,url:"https://wanderlog.com/assets/LandingPageProductAnimation__card3.jpg"},
    {id:4,url:"https://wanderlog.com/assets/LandingPageProductAnimation__card3.jpg"}

]
const aaa=[1,2,3,4,5,6,7]
const Itinerary = () => {
    const [url, setUrl] = useState(TAB_URL)

     
     
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); // Chọn một chỉ số ngẫu nhiên
          [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi
        }
        return array;
      }
      
      // Sắp xếp ngẫu nhiên sau 1 giây
      useEffect(() => {
       
      
        return () => {
            setInterval(() => {
                const shuffledArr = shuffleArray([...TAB_URL]); // Trộn mảng
                setUrl(shuffledArr); 
              }, 1000);
        }
      }, [url])
      
    return (
        <div className='w-full flex gap-3'>
            <div className='w-1/2 relative'>
                <img className='w-full' src='https://wanderlog.com/assets/LandingPageProductAnimation__background.jpg' height={470}></img>
                <div className='absolute top-1 col-sm-3 gap-2'>
                    {
                        url.map((imgUrl)=>{
                             return <img key={imgUrl.id} className='h-20 ml-24 rounded-lg' src={imgUrl.url}></img>
                        })
                    }
                    
                </div>
            </div>
            <div className='w-1/2 text-black'>
              <h1 className='font-bold text-[2.5vw] px-5'>Your itinerary and your map in one view</h1>
              <p className='font-thin p-5'>No more switching between different apps, tabs, and tools to keep track of your travel plans.</p>
            </div>
        </div>
    )
}

export default Itinerary