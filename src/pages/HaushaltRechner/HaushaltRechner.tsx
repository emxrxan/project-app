import React from "react";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { Stack, StackItem } from "@fluentui/react";
import { GesamtBilanz } from "./Component/GesamtBilanz/GesamtBilanz.1";

export const HaushaltRechner: React.FC = () => {
    return <Provider store={Store}>
        <HaushaltRechnerApp />
    </Provider>
}

export const HaushaltRechnerApp: React.FC = () => {

    return <Stack>
        <StackItem>
            <GesamtBilanz />
        </StackItem>
        <StackItem>
            Liste
            Add
        </StackItem>
    </Stack>
}