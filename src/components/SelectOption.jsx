import React from 'react'
import { formatNumber } from '../utils/utils'

const data = [
    {
        label: 'matanajwa',
        count: 330000
    },
    {
        label: 'Najwashihab',
        count: 228000
    },
    {
        label: 'Narasi',
        count: 188000
    },
    {
        label: 'ngawalsuarapemilu',
        count: 100
    },
    {
        label: 'NarasiDaily',
        count: 15000
    },
    {
        label: 'NarasiDaily',
        count: 15000
    },
    {
        label: 'NarasiDaily',
        count: 15000
    },
    {
        label: 'NarasiDaily',
        count: 15000
    },
    {
        label: 'NarasiDaily',
        count: 15000
    },
    {
        label: 'NarasiDaily',
        count: 15000
    }
]

const SelectOption = () => {
    return (
        <form style={{ width: '100%' }}>
            <select size={10} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#237D31] focus:border-[#237D31] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {data.map((item, index) => {
                    return (
                        <option key={index} value="#">#{item.label}({formatNumber(item.count)})</option>
                    )
                })}
            </select>
        </form>
    )
}

export default SelectOption