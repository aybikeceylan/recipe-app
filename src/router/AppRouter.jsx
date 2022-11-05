import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login"
import Home from "../pages/Home"
import PrivateRouter from './PrivateRouter'
import About from '../pages/About'
import Details from '../pages/Details'

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
                    <Route path='/about' element={<PrivateRouter user={user} />}>
                        <Route path="" element={<About />} />
                    </Route>
                    <Route path='/details' element={<PrivateRouter user={user} />}>
                        <Route path="" element={<Details />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default AppRouter