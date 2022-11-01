import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

const Home = () => {
    const [query, setQuery] = useState("")
    const [meal, setMeal] = useState("Breakfast")
    const [recipes, setRecipes] = useState("")
    const APP_ID = "e0550b67";
    const APP_KEY = "b9fce4db63d154f4247d4d944c3fba8f";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    console.log("here");
    const getData = async () => {
        try {
            const data = await axios(url)
            console.log(data)
        } catch (error) {
            console.log(error)
        }


        getData()



    }

    console.log(query)
    return (
        <div className="Home">
            <Header />
            <Main />
        </div>
    )
}

export default Home