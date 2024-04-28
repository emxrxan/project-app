import { Stack } from "@fluentui/react";
import React from "react";
import { Donut } from "./Donut";
import { Details } from "./DetailsList";

export const Overview: React.FC = () => {
    return <Stack>
        <Stack.Item>
            <Donut />
        </Stack.Item>
        <Stack.Item>
            <Details />
        </Stack.Item>
    </Stack>
}