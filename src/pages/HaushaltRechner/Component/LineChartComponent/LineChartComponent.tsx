import { IChartProps, LineChart } from "@fluentui/react-charting";
import React from "react";
import { appTheme } from "../../../../AppTheme/appTheme";

export const LineChartComponent: React.FC = () => {

    const data: IChartProps = {
        chartTitle: 'TestChart',
        lineChartData: [
            {
                data: [
                    { x: new Date('2018/01/06'), y: 1000, yAxisCalloutData: `$${1000}`, xAxisCalloutData: new Date('2018/01/06').toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    })},
                    { x: new Date('2018/01/10'), y: 18, },
                    { x: new Date('2018/01/16'), y: 10 },
                    { x: new Date('2018/01/26'), y: 10 },
                    { x: new Date('2018/02/06'), y: 10, },
                    { x: new Date('2018/02/10'), y: 18, },
                    { x: new Date('2018/02/16'), y: 1000 },
                    { x: new Date('2018/02/26'), y: 100 },
                    { x: new Date('2018/03/06'), y: 500, },
                    { x: new Date('2018/03/10'), y: 38, },
                    { x: new Date('2018/03/16'), y: 10 },
                    { x: new Date('2018/03/26'), y: 13 },
                    { x: new Date('2018/04/06'), y: -560, },
                    { x: new Date('2018/04/10'), y: 15, },
                    { x: new Date('2018/04/16'), y: 760 },
                    { x: new Date('2018/04/26'), y: 2367 },
                    { x: new Date('2018/05/06'), y: 35, },
                    { x: new Date('2018/05/10'), y: 688, },
                    { x: new Date('2018/05/16'), y: -108 },
                    { x: new Date('2018/05/26'), y: 17 },
                    { x: new Date('2018/06/06'), y: 98, },
                    { x: new Date('2018/06/10'), y: 76, },
                    { x: new Date('2018/06/16'), y: 78 },
                    { x: new Date('2018/06/26'), y: 66 },
                    { x: new Date('2018/07/06'), y: 87, },
                    { x: new Date('2018/07/10'), y: 56, },
                    { x: new Date('2018/07/16'), y: 540 },
                    { x: new Date('2018/07/26'), y: 340 },
                    { x: new Date('2018/08/06'), y: 120, },
                    { x: new Date('2018/08/10'), y: 18, },
                    { x: new Date('2018/08/16'), y: 100 },
                    { x: new Date('2018/10/16'), y: 140 },
                    { x: new Date('2018/12/17'), y: -180 },
                ],
                legend: 'Umsätze',
                lineOptions: {
                    strokeWidth: 4,
                    strokeLinecap: 'square'
                },
                color: appTheme.RED,
            }
        ]
    };

    return <>
        <LineChart
            data={data} 
            yMaxValue={2460}
            yMinValue={-650}
            tickFormat={"%m/%y"}
        />
    </>
}