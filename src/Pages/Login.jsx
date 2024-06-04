import React from 'react'

const Login = () => {
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center customBackgound">
                <div className='text-xl mb-2 text-gray-600'>Welcome back , Login to continue</div>
                <div className="border border-black bg-slate-400 h-80 w-96 flex flex-col p-2 space-y-2 rounded-md" >
                    <label htmlFor="username" className="text-2xl flex justify-center">username</label>
                    <input type="text" placeholder='he123' className='h-10 text-2xl rounded-sm' />
                    <label htmlFor="password" className='text-2xl justify-center flex '>password</label>
                    <input type="password" placeholder="***" className='h-10 text-2xl rounded-sm' />
                    <div className="flex justify-center pt-6">
                        <button type='submit' className="bg-gray-500 h-10 w-36 rounded-md space-y-4 ">Login</button>
                    </div>
                    <div className="flex justify-center pt-3">don't have account?<span className='text-red-500'>Register</span></div>
                </div>
            </div>
        </>
    )
}

export default Login;