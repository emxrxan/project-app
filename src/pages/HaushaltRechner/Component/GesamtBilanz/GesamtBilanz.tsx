import React from "react";
import { Stack, StackItem, Separator, Text } from "@fluentui/react";
import { 
    gesamtStyle, 
    einnahmeTextStyle, 
    ausgabeTextStyle, 
    neutralTextStyle, 
    separatorStyle, 
    textStyles
} from "./Style";
import { AddNews } from "../AddNews/AddNews";
import { LineChartComponent } from "../LineChartComponent/LineChartComponent";
import { SelectYear } from "../SelecetYear/SelectYear";

const ShowBilanz: React.FC = () => {
    return <>
        <Text {...einnahmeTextStyle} className={textStyles}>Einnahme: +100</Text>
        <Separator vertical={true} styles={separatorStyle} />
        <Text {...ausgabeTextStyle} className={textStyles}>Ausgabe: -100</Text>
        <Separator vertical={true} styles={separatorStyle}/>
        <Text {...neutralTextStyle} className={textStyles}>Gesamt: 0</Text>
    </>
}

export const GesamtBilanz: React.FC = () => {

    return <Stack>
        <StackItem {...gesamtStyle}>
            <SelectYear />
            <ShowBilanz />
            <AddNews />
        </StackItem>
        <StackItem>
            <LineChartComponent />
        </StackItem>
    </Stack>;
};
