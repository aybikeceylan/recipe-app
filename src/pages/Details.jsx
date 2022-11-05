import React from 'react'
import { useLocation } from 'react-router-dom';
import meal from '../assets/meal.svg'

const Details = () => {
    const { state } = useLocation()
    return (
        <div className='details'>
            <div>
                <div className="flex justify-around items-center py-5 bg-orange-600 text-black">
                    <div className="text-2xl font-bold">{state?.label}</div>
                    <img src={meal} alt="" className="w-40" />
                </div>
            </div>

            <div className="flex justify-around bg-orange-300 py-12  bg-cover flex-col md:flex-row px-5 h-full ">
                <div className='w-1/2'>
                    {state?.ingredientLines.map((item) => {
                        return (
                            <div className="font-bold text-black text-xl ">-{item}</div>
                        );
                    })}
                </div>
                <img src={state?.image} alt="" className="rounded-md shadow-lg shadow-orsnge-200 w-[300px] h-[300px] " />
            </div>
        </div>
    )
}

export default Details