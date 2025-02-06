import React from 'react'
import { img1, img2, img3, img4, img5, imgHero } from "../../assets";
import { Slide } from 'react-awesome-reveal';

const Menu = () => {

    const menus = [
        {
            id: 1,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img1,
            price: '$2.00'
        },
        {
            id: 2,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img2,
            price: '$2.00'
        },
        {
            id: 3,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img3,
            price: '$2.00'
        },
        {
            id: 4,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img4,
            price: '$2.00'
        },
        {
            id: 5,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: imgHero,
            price: '$2.00'
        },
        {
            id: 6,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img5,
            price: '$2.00'
        },
    ];

    return (
        <div className='bg-[#252525] py-10  text-white '>

            <div className="title mb-10 text-center">
                <h1 className='font-bold text-3xl'>Our Menu</h1>
                <div className='line bg-orange-400 h-0.5 w-16 mx-auto mt-4'></div>
            </div>

            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10'>
                <Slide >
                    {menus.map((menu) => (
                        <div key={menu.id} className='bg-[#1E1E1E] overflow-hidden p-5 rounded-lg shadow-md hover:scale-110  transition duration-300'>
                            <img src={menu.img} alt={menu.title} className='w-60 mb-4 text-center mx-auto' />
                            <h2 className='text-orange-400 font-bold text-2xl mb-2 '>{menu.title}</h2>
                            <p className='text-gray-400'>{menu.desc}</p>
                            <p className='text-orange-600 font-bold mt-4'>{menu.price}</p>
                        </div>

                    ))}
                </Slide>
            </div>

        </div>
    )
}

export default Menu