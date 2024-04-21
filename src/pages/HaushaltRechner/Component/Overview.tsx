import { Stack } from "@fluentui/react";
import React from "react";
import { Donut } from "./Donut";

export const Overview: React.FC = () => {
    return <Stack>
        <Stack.Item>
            <Donut />
        </Stack.Item>
        <Stack.Item>
            Tabelle
        </Stack.Item>
    </Stack>
}