import React from 'react'

const CustomButton = ({ onClick, children, isDisabled }) => {

    return (
        <button disabled={isDisabled} onClick={onClick} className="bg-[#237D31] py-3 px-5 inline-block text-white text-sm rounded-md">
            {children}
        </button>
    )
}

export default CustomButton