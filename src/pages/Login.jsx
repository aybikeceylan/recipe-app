import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ({ user, setUser }) => {
    const [account, setAccount] = useState(true)
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const handleClick = () => {
        setUser(!user)
        console.log(user)
        navigate("/home")
    }
    return (
        <div className='login '>
            <div className="box p-5 border-2-solid  shadow-2xl shadow-current w-[50%]  bg-yellow-700 opacity-80">
                <div className="w-[80%] ">
                    <p className="text-start font-bold indent-2">
                        Name
                    </p>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-[90%] rounded-md indent-2 h-8"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="w-[80%]">
                    <p className="text-start font-bold indent-2">
                        Password
                    </p>
                    <input
                        type="password"
                        placeholder="Enter Your Pasword"
                        className="w-[90%] rounded-md indent-2 h-8"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                </div>
                <div className="w-[80%]">
                    <p className="text-start font-bold indent-2">
                        Password
                    </p>
                    <input
                        type="password"
                        placeholder="Enter Your Pasword"
                        className="w-[90%] rounded-md indent-2 h-8"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                    <div className="w-full d-flex justify-content-center align-items-center m-3 ">
                        <button className=" w-[50%] bg-gray-800 text-white rounded-md p-1 "
                            onClick={handleClick}
                        >
                            {user ? "Register" : "Login"}
                        </button>
                    </div>
                    <p
                        className="underline underline-offset-4 text-black text-xl"
                        onClick={() => setAccount(!account)}
                    >
                        {account ? "I have an account" : "Don't have an account?"}
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Login