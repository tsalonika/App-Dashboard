import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const BarCharts = () => {

    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        const labels = ["April 01", "April 02", "April 03", "April 04", "April 05", "April 06", "April 07"];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Likes",
                    data: [0, 10000, 10000, 15000, 25000, 40000, 20100],
                    backgroundColor: "#0088FE",
                    stack: "Stack 0",
                },
                {
                    label: "Video Views",
                    data: [100000, 100000, 200000, 150000, 250000, 400000, 201000],
                    backgroundColor: "#FF8042",
                    stack: "Stack 1",
                },
            ],
        };

        const options = {
            plugins: {
                title: {
                    display: true,
                },
                legend: {
                    position: "bottom",
                }
            },
            responsive: true,
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        };

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: "bar",
            data: data,
            options: options,
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return <canvas ref={chartRef} />;
}

export default BarCharts