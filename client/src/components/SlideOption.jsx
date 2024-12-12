import React, { useState } from 'react';
import { formatNumber } from '../utils/utils';

const SlideOption = ({ options, labelKey }) => {
    const [selectedOption, setSelectedOption] = useState(options[0][labelKey]);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <select
            className="border border-gray-300 rounded-md shadow-md w-full bg-[#F3F4F6] outline-none p-3"
            style={{ userSelect: 'none' }}
            size="8"
            value={selectedOption}
            onChange={handleChange}
        >
            {options.map((option, index) => (
                <option
                    key={index}
                    value={option[labelKey]}
                    className={`font-semibold ${option[labelKey] === selectedOption ? 'bg-[#237D31] text-white' : ''}`}
                >
                    {option[labelKey]} ({formatNumber(option.total)})
                </option>
            ))}
        </select>
    );
};

export default SlideOption;
