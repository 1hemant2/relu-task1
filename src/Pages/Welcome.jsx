import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../Firebase/User';;
const Welcome = () => {

    const [name, setName] = useState('');

    const fetchUserName = async () => {
        const uid = localStorage.getItem('uid');
        const data = await fetchUserData(uid);
        console.log(data);
    }
    useEffect(() => {
        fetchUserName();
    }, [name])

    return (
        <>
            <div className='text-4xl'>Welcome {`${name}`}, you are successfully loged in</div>
        </>
    )
}

export default Welcome;