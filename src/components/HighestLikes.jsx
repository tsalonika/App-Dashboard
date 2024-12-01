import React, { Fragment } from 'react'

const dataHighestLikes = [
    {
        link: 'https://instagram.com/sadasdsadqweqdsad',
        totalLikes: 1000
    },
    {
        link: 'https://instagram.com/sadasdsadqweqdsad',
        totalLikes: 1000
    },
    {
        link: 'https://instagram.com/sadasdsadqweqdsad',
        totalLikes: 1000
    },
    {
        link: 'https://instagram.com/sadasdsadqweqdsad',
        totalLikes: 1000
    },
]

const HighestLikes = () => {
    return (
        <Fragment>
            {dataHighestLikes.map((item, index) => {
                return (
                    <div className='flex items-center gap-5 mb-4' key={index}>
                        <input disabled value={item.link} type="text" className="w-9/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <p className='text-[#237D31] font-bold flex'>{item.totalLikes} Likes</p>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default HighestLikes