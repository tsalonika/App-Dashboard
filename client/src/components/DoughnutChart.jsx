import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusionCharts from "react-fusioncharts";

// Load the charts module
ReactFusionCharts.fcRoot(FusionCharts, Charts);

const DoughnutChart = ({ data }) => {
    const chartData = [
        { label: "Positive", value: data.positive },
        { label: "Neutral", value: data.neutral },
        { label: "Negative", value: data.negative },
    ];

    const chartConfig = {
        type: "doughnut2d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                bgColor: "#ffffff",
                canvasBgColor: "#ffffff",
                canvasBorderAlpha: "0",
                startingAngle: "0",
                showPercentInTooltip: "0",
                decimals: "0",
                useDataPlotColorForLabels: "1",
                theme: "fusion",
                showLabels: "0",
                showLegend: "1",
                showValues: "0",
                legendPosition: "bottom",
                legendAlign: "middle",
                legendItemFontSize: "11",
                legendIconScale: "0.6",
                pieRadius: "80%",
                chartLeftMargin: "0",
                legendItemFontBold: "0",
                centerLabelBold: "1",
                doughnutRadius: "80%",
                legendNumColumns: "4",
                centerLabelFontSize: "10"
            },
            data: chartData,
        },
    };

    return <ReactFusionCharts {...chartConfig} />;
};

export default DoughnutChart;
