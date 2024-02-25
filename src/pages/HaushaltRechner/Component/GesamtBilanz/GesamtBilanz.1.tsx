import { Stack, StackItem, Separator, Text } from "@fluentui/react";
import { DataVizPalette, IChartProps, LineChart } from "@fluentui/react-charting";
import React from "react";
import { gesamtStyle, einnahmeTextStyle, ausgabeTextStyle, neutralTextStyle, separatorStyle, textStyles } from "./Style";
import { appTheme } from "../../../../AppTheme/appTheme";


export const GesamtBilanz: React.FC = () => {

    const data: IChartProps = {
        chartTitle: 'TestChart',
        lineChartData: [
            {
                data: [
                    { x: new Date('2018/01/06'), y: 1, },
                    { x: new Date('2018/01/10'), y: 18, },
                    { x: new Date('2018/01/16'), y: 10 },
                    { x: new Date('2018/01/26'), y: 10 },
                    { x: new Date('2018/02/06'), y: 10, },
                    { x: new Date('2018/02/10'), y: 18, },
                    { x: new Date('2018/02/16'), y: 10 },
                    { x: new Date('2018/02/26'), y: 100 },
                    { x: new Date('2018/03/06'), y: 50, },
                    { x: new Date('2018/03/10'), y: 38, },
                    { x: new Date('2018/03/16'), y: 10 },
                    { x: new Date('2018/03/26'), y: 13 },
                    { x: new Date('2018/04/06'), y: -56, },
                    { x: new Date('2018/04/10'), y: 15, },
                    { x: new Date('2018/04/16'), y: 76 },
                    { x: new Date('2018/04/26'), y: 23 },
                    { x: new Date('2018/05/06'), y: 35, },
                    { x: new Date('2018/05/10'), y: 68, },
                    { x: new Date('2018/05/16'), y: 10 },
                    { x: new Date('2018/05/26'), y: 17 },
                    { x: new Date('2018/06/06'), y: 98, },
                    { x: new Date('2018/06/10'), y: 76, },
                    { x: new Date('2018/06/16'), y: 78 },
                    { x: new Date('2018/06/26'), y: 66 },
                    { x: new Date('2018/07/06'), y: 87, },
                    { x: new Date('2018/07/10'), y: 56, },
                    { x: new Date('2018/07/16'), y: 54 },
                    { x: new Date('2018/07/26'), y: 34 },
                    { x: new Date('2018/08/06'), y: 12, },
                    { x: new Date('2018/08/10'), y: 18, },
                    { x: new Date('2018/08/16'), y: 10 },
                    { x: new Date('2019/08/26'), y: -18 },
                ],
                legend: 'first legend',
                lineOptions: {
                    strokeWidth: 5,
                },
                color: appTheme.RED,
            }
        ]
    };

    return <Stack>
        <StackItem {...gesamtStyle}>
            <Text {...einnahmeTextStyle} className={textStyles}>Einnahme: +100</Text>
            <Separator vertical={true} styles={separatorStyle} />
            <Text {...ausgabeTextStyle} className={textStyles}>Ausgabe: -100</Text>
            <Separator vertical={true} styles={separatorStyle}/>
            <Text {...neutralTextStyle} className={textStyles}>Gesamt: 0</Text>
        </StackItem>
        <StackItem>
            <LineChart
                data={data}
                width={100}
                yMaxValue={130}
                yMinValue={-100}
                tickFormat={"%m/%y"} 
            />
        </StackItem>
    </Stack>;
};
