import React from 'react'
import { imgHero } from '../../assets'

const Landing = () => {
    return (
        <div className='bg-[#3f181c]  '>
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
                <div className="flex flex-col gap-6 max-w-lg  px-2 ">
                    <h1 className="font-bold text-4xl text-orange-300 font-mono">
                        Best Coffee
                    </h1>
                    <h2 className='font-bold text-white  text-4xl '>
                        Make Your Day Great With Our Special Coffee
                    </h2>
                    <p className="lead text-white text-lg ">
                        Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.
                    </p>
                    <div className='text-white flex gap-5 '>
                        <button className='px-4 py-2 rounded-full font-medium border 
                             hover:border-orange-500  hover:bg-orange-500  transition duration-500'>
                            Order Now</button>
                        <button className='px-4 py-2 rounded-full font-medium border 
                             hover:border-orange-500  hover:bg-orange-500  transition duration-500'>
                            Countact Us</button>
                    </div>
                </div>
                <div className='felx justify-center text-center'>
                    <img src={imgHero} alt="" className=' object-cover rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default Landing