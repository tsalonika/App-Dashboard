import React from 'react'

const InputCustom = ({ placeholder, handleChangeInput, errorCheck }) => {
    return (
        <input onChange={handleChangeInput} placeholder={placeholder || 'Masukkan username'} className={`w-full border p-2 outline-none border-black ${errorCheck ? 'border-red-500' : ''} rounded-md`} />
    )
}

export default InputCustom