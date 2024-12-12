import React from 'react'
import ProfileUser from '../assets/images/user.png';

const PhotoCircle = ({ srcImg }) => {
    return (
        <div className='w-52 h-52 rounded-full p-1 object-cover border-2 border-[#237D31]'>
            <img src={srcImg || ProfileUser} alt='Profile User' className='rounded-full w-auto h-auto overflow-auto border-2 border-[#237D31]' />
        </div>
    )
}

export default PhotoCircle