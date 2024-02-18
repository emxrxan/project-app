import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { testDataAction } from "./Store/Test";
import Store, { StoreType } from "./Store/Store";

export const HaushaltRechner: React.FC = () => {
    return <Provider store={Store}>
        <HaushaltRechnerApp />
    </Provider>
}

export const HaushaltRechnerApp: React.FC = () => {

    const dispatch = useDispatch()
    const state = useSelector((state: StoreType) => state.test.counter)
    return <>
        HAUSHALT
    </>
}