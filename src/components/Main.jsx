import React from 'react'
import Food from './Food';
console.log("home");
const Main = ({ setMeal, query, setQuery, getData, recipes }) => {
    const handleInput = (e) => {
        setQuery(e.target.value)
    }
    const handleSelect = (e) => {
        setMeal(e.target.value)
    }
    const handleClick = () => {
        getData()
    }


    return (
        < div className='bg-yellow-500 h-screen' >
            <div className="p-3">
                <h1 className='text-center'>Food App</h1>

                <div class="flex my-5 gap-5  justify-center">

                    <input type="text" value={query} onChange={handleInput} className='w-[15rem] rounded-lg' />

                    <button className='bg-red-600 py-1 px-5 font-bold text-md text-slate-300 rounded-md active:scale-95 active:bg-slate-300 active:text-slate-600 duration '
                        onClick={handleClick}>Search</button>

                    <select value="select" id="meal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSelect}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                        <option value="Coffee">Coffee</option>
                    </select>
                </div>
            </div>
            <Food recipes={recipes} />
        </div >
    )
}

export default Main