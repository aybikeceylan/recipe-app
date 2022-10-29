import React from 'react'

const Login = () => {
    return (
        <div className='border-solid border-black-100 border-1 flex-col'>
            <input type="name" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button type="submit" >LOGIN</button>
        </div>
    )
}

export default Login