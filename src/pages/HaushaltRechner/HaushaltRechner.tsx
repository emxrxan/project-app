import { Pivot, PivotItem, Stack } from "@fluentui/react";
import React from "react";
import { Overview } from "./Component/Overview";
import { FormField } from "./Component/FormField";

export const HaushaltRechner: React.FC = () => {
    return <Stack.Item tokens={{ padding: '0.5rem 1rem' }}>
        <Pivot>
            <PivotItem headerText="Übersicht" itemIcon="OEM">
                <Overview />
            </PivotItem>
            <PivotItem headerText="Neu" itemIcon="add">
                <FormField />
            </PivotItem>
        </Pivot>
    </Stack.Item>
}