import React from 'react'

import { gallery1,gallery2,gallery3,gallery4,gallery5,gallery6 } from '../../assets'


// import react awesome
// for run npm i @emotion/react and npm i react-awesome-reveal
import { Zoom } from 'react-awesome-reveal';

const Gallery = () => {

    const Images = [
        { id: 1, img: gallery1 },
        { id: 2, img: gallery2 },
        { id: 3, img: gallery3 },
        { id: 4, img: gallery4 },
        { id: 5, img: gallery5 },
        { id: 6, img: gallery6 },
    ];

  return (
    <div className='bg-[#3f181c] py-10  text-white '>
        <div className="title mb-10 text-center">
                <h1 className='font-bold text-3xl '>Gallary</h1>
                <div className='line bg-orange-400 h-0.5 w-16 mx-auto mt-4'></div>
            </div>
            
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10'>
                <Zoom>
                {Images.map((item) =>(
                   
                    <div key={item.id} className='relative overflow-hidden rounded-lg filter brightness-50 hover:brightness-100 transition-all duration-300 ease-in-out'>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='w-full h-full object-cover transition-all duration-700 hover:scale-125' />
                    </div>
                  
                ))}
                 </Zoom>
            </div>
           
    </div>
  )
}

export default Gallery