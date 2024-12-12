import React from 'react'

const CustomButton = ({ handleOnClick, children, isDisabled = false }) => {
    return (
        <button onClick={handleOnClick} disabled={isDisabled} className={`bg-[#237D31] px-5 py-2 rounded-md border-none text-white inline-block hover:-translate-y-1 hover:scale-110 duration-300 ${isDisabled ? 'bg-opacity-50' : ''}`}>{children}</button>
    )
}

export default CustomButton