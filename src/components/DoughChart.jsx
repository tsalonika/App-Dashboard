import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const DoughChart = () => {

    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        const data = {
            labels: [
                'Netral',
                'Positif',
                'Negatif'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    '#48B4DF',
                    '#38E28A',
                    '#C32F2F'
                ],
                hoverOffset: 4
            }]
        };

        const options = {
            plugins: {
                title: {
                    display: true,
                },
                legend: {
                    position: "bottom",
                },
                tooltip: {
                    enabled: false,
                },
            },
            responsive: true,
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: false,
                },
            },
        };

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: "doughnut",
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

export default DoughChart