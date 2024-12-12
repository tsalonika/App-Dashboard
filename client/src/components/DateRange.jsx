import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DateRange = ({ onDateChange, errorCheck = false }) => {
    const [dateRange, setDateRange] = useState([]);

    const handleDateChange = (selectedDates) => {
        setDateRange(selectedDates);
        if (onDateChange) {
            onDateChange(selectedDates);
        }
    };

    return (
        <div className={`flex items-center border border-black ${errorCheck ? 'border-red-500' : ''} p-2 rounded-md w-1/2`}>
            {/* Calendar Icon */}
            <span className="mr-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#237D31]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 4h10M4 11h16m-1 10H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
                    />
                </svg>
            </span>

            {/* Date Picker */}
            <Flatpickr
                options={{
                    mode: "range",
                    dateFormat: "Y-m-d",
                }}
                className="w-full outline-none"
                placeholder="Select date range"
                value={dateRange}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DateRange;
