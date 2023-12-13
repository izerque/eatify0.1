import React, { useState } from 'react'
import { data } from '../data/data.js'
import { motion, AnimatePresence } from "framer-motion"

const Food = () => {
    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }
   
    return (
        <div className='max-w-[1240px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>All</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Chicken</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700 px-2'>Filter Price</p>
                    <div className='flex justify-start flex-wrap  max-w-[400px] w-full'>
                        <button onClick={() => filterPrice('5,000')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>5,000</button>
                        <button onClick={() => filterPrice('30,000')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>30,000</button>
                        <button onClick={() => filterPrice('45,000')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>45,000</button>
                        <button onClick={() => filterPrice('20,000')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>20,000</button>
                    </div>
                </div>
            </div>

            {/* diplay food */}
            <AnimatePresence>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {foods.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            key={item.id}
                            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                            <img className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                            <div className='flex flex-col gap-2 justify-between px-2 py-2 '>

                               <div className='flex justify-between w-[100%] px-2 py-2'> <p>{item.name}</p>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 font-medium rounded-md'><span className='font-bold'>Ugx. </span>{item.price}</span>
                                </p>
                                </div>
                                <div className='flex justify-between items-center'>
                                <p className='text-gray-600 w-[70%] text-[12px] px-2 font-thin '>{item.description}</p>
                                <p className='text-orange-500 w-[30%] flex text-[16px] font-thin justify-end px-2 items-end'>{item.rating}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    )
}

export default Food