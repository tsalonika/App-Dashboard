import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts);

const BarChart = ({ data }) => {
    const chartData = data.map(item => ({
        label: new Date(item.date).toLocaleDateString(),
        data: [
            { metric: 'Likes', value: item.total_likes },
            { metric: 'Comments', value: item.total_comments },
            { metric: 'Views', value: item.total_views },
            { metric: 'Posts', value: item.total_posts },
        ]
    }));

    const categories = [...new Set(chartData.map(item => item.label))];

    const colors = {
        Likes: '#FF5733',
        Comments: '#33FF57',
        Views: '#3357FF',
        Posts: '#FF33A1'
    };

    const dataset = ['Likes', 'Comments', 'Views', 'Posts'].map(metric => ({
        seriesname: metric,
        data: chartData.map(item => ({
            value: item.data.find(d => d.metric === metric)?.value || 0
        })),
        color: colors[metric]
    }));

    const chartConfigs = {
        type: 'mscombi2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                xAxisName: 'Date',
                yAxisName: 'Count',
                theme: 'fusion',
                plotToolText: "<b>${value}</b> ${metric} on ${label}",
                showValues: '1',
            },
            categories: [{ category: categories.map(label => ({ label })) }],
            dataset: dataset,
        },
    };

    return <ReactFC {...chartConfigs} />;
};

export default BarChart;
