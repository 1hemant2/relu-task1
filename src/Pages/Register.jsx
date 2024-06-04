import React from 'react'
import { useState } from 'react';
import { registerUser } from '../Firebase/User';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e) => {
        console.log();
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = async () => {
        const res = await registerUser(data);
        if (res === "success") {
            navigate('/');
        } else {
            alert('user not found');
        }
    }
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center customBackgound">
                <div className='text-xl mb-2 text-gray-600'><span className='text-3xl'>🙋</span>Register to continue</div>
                <div className="border border-black bg-slate-400 h-96 w-96 flex flex-col p-2 space-y-2 rounded-md" >
                    <label htmlFor="name" className="text-2xl flex justify-center" >name</label>
                    <input type="text" placeholder='jon doe' className='h-10 text-2xl rounded-sm' name="name" onChange={handleChange} />
                    <label htmlFor="email" className="text-2xl flex justify-center">Email</label>
                    <input type="email" placeholder='h@gmail.com' className='h-10 text-2xl rounded-sm' name="email" onChange={handleChange} />
                    <label htmlFor="password" className='text-2xl justify-center flex '>password</label>
                    <input type="password" placeholder="*******" className='h-10 text-2xl rounded-sm' name='password' onChange={handleChange} />
                    <div className="flex justify-center pt-6">
                        <button type='submit' className="bg-gray-500 h-10 w-36 rounded-md space-y-4 "
                            onClick={handleSubmit}
                        >
                            Register
                        </button>
                    </div>
                    <div className="flex justify-center pt-3">already have account?<span className='text-red-500 cursor-pointer' onClick={() => navigate('/')}>Login</span></div>
                </div>
            </div>
        </>
    )
}

export default Register;