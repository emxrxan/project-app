import { DataVizPalette, DonutChart, IChartProps, getColorFromToken } from "@fluentui/react-charting";
import React from "react";

export const Donut: React.FC = () => {

    const dataChart: IChartProps = {
        chartData: [
            { legend: 'Einnahme', data: 2000, color: getColorFromToken(DataVizPalette.color1), xAxisCalloutData: 'Einnahme' },
            { legend: 'Ausagbe', data: 20000, color: getColorFromToken(DataVizPalette.color2), xAxisCalloutData: 'Ausgabe' },
        ],
    };

    return <>
        <DonutChart 
            data={dataChart} 
            innerRadius={75} 
            valueInsideDonut={'+100€'} 
            showLabelsInPercent={true}
            hideLabels={false} 
        />
</>
}