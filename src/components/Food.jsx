import React from 'react'
import { useNavigate } from 'react-router-dom';
import home from "../assets/home.svg"

const Food = ({ recipes }) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-wrap w-[100vw] gap-5 items-center justify-center'>
            {recipes ? (
                recipes.map((item, index) => {
                    const { recipe } = item;
                    console.log(recipe)
                    return (
                        <div className="bg-orange-600 px-10 py-10 flex justify-center flex-col items-center w-30 h-[20rem] gap-4 shadow-xl shadow-slate-300 rounded-xl"
                            key={index}
                        >
                            <p className="w-[340px] text-center font-semibold text-slate-200 ">
                                {recipe?.label}
                            </p>
                            <img
                                src={recipe?.image}
                                className="w-40 rounded-lg shadow-md shadow-slate-300"
                                alt=""
                            ></img>
                            <button
                                onClick={() => {
                                    navigate("/details", { state: recipe });
                                    console.log("first")
                                }}
                                className=" bg-slate-800 text-slate-200 py-1 px-3 rounded-lg active:scale-95 mt-2 font-bold"
                            >
                                View More
                            </button>
                        </div>
                    )
                })
            ) : <img src={home} className="w-96 mt-32 mb-8" alt=""></img>

            }
        </div>


    )
}

export default Food