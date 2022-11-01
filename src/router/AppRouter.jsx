import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login"
import Home from "../pages/Home"
import PrivateRouter from './PrivateRouter'
import About from '../pages/About'

const AppRouter = () => {
    const [user, setUser] = useState(false)
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login user={user} setUser={setUser} />} />
                    <Route path='/home' element={<PrivateRouter user={user} />}>
                        <Route path="" element={<Home />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default AppRouter