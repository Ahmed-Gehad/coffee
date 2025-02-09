import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Images
import { user1, user2, user3, user4, user5 } from "../../assets";

const Testimonials = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };






    return (
        <div className='bg-[#252525] py-10  text-white '>
            <div className="title mb-10 text-center">
                <h1 className='font-bold text-3xl'>Testimonials</h1>
                <div className='line bg-orange-400 h-0.5 w-16 mx-auto mt-4'></div>
            </div>

            {/* Slider */}
            <div className="container mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {/* الشرائح */}
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-20 h-20 rounded-full" src={user1} alt="User 1" />
                            <p className="text-lg">Amazing service and top-notch coffee!</p>
                            <h3 className="font-bold text-orange-500">- John Doe</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-20 h-20 rounded-full" src={user2} alt="User 2" />
                            <p className="text-lg">A perfect start to my day, every day.</p>
                            <h3 className="font-bold text-orange-500">- Jane Smith</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-20 h-20 rounded-full" src={user3} alt="User 3" />
                            <p className="text-lg">Best coffee shop in town!</p>
                            <h3 className="font-bold text-orange-500">- Emily Brown</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-20 h-20 rounded-full" src={user4} alt="User 4" />
                            <p className="text-lg">Friendly staff and great ambiance.</p>
                            <h3 className="font-bold text-orange-500">- Michael Green</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4">
                            <img className="w-20 h-20 rounded-full" src={user5} alt="User 5" />
                            <p className="text-lg">Love their specialty drinks!</p>
                            <h3 className="font-bold text-orange-500">- Sarah Johnson</h3>
                        </div>
                    </SwiperSlide>

                    {/* دايره العد*/}
                    <div className="autoplay-progress absolute bottom-5 right-5 flex items-center gap-2">
                        <svg className="w-8 h-8 text-orange-400" viewBox="0 0 48 48" ref={progressCircle}>
                            <circle
                                className="text-gray-600"
                                cx="24"
                                cy="24"
                                r="20"
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray="125.6"
                                strokeDashoffset="125.6"
                                style={{ stroke: "var(--progress)" }}
                            />
                        </svg>
                        <span ref={progressContent} className="text-orange-400 font-bold"></span>
                    </div>
                </Swiper>
            </div>



        </div>

    )
}

export default Testimonials