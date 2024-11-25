import React from 'react';
import BlankImage from '../assets/images/blank-profile.png';

const ImageRounded = ({ srcImg, altProp }) => {
    return (
        <div className='w-52 h-52 overflow-hidden rounded-full border-2 border-[#237D31]'>
            <img crossOrigin='anonymous' src={srcImg || BlankImage} alt={altProp} className='w-full h-full object-cover' />
        </div>
    )
}

export default ImageRounded