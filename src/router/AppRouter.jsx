import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login"

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter