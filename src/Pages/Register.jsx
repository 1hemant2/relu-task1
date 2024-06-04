import React from 'react'
import { useState } from 'react';
// import { registerUser } from '../Firebase/User';
const Register = () => {
    const [data, setData] = useState({ name: '', username: '', password: '' });
    const handleChange = (e) => {
        console.log();
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = () => {
        // registerUser(data);
    }
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center customBackgound">
                <div className='text-xl mb-2 text-gray-600'><span className='text-3xl'>🙋</span>Register to continue</div>
                <div className="border border-black bg-slate-400 h-96 w-96 flex flex-col p-2 space-y-2 rounded-md" >
                    <label htmlFor="name" className="text-2xl flex justify-center" >name</label>
                    <input type="text" placeholder='he123' className='h-10 text-2xl rounded-sm' name="name" onChange={handleChange} />
                    <label htmlFor="username" className="text-2xl flex justify-center">username</label>
                    <input type="text" placeholder='he123' className='h-10 text-2xl rounded-sm' name="username" onChange={handleChange} />
                    <label htmlFor="password" className='text-2xl justify-center flex '>password</label>
                    <input type="password" placeholder="*******" className='h-10 text-2xl rounded-sm' name='password' onChange={handleChange} />
                    <div className="flex justify-center pt-6">
                        <button type='submit' className="bg-gray-500 h-10 w-36 rounded-md space-y-4 "
                            onClick={handleSubmit}
                        >
                            Register
                        </button>
                    </div>
                    <div className="flex justify-center pt-3">already have account?<span className='text-red-500 cursor-pointer'>Login</span></div>
                </div>
            </div>
        </>
    )
}

export default Register;