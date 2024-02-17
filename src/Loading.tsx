import React from "react";
import { ISpinnerStyleProps, ISpinnerStyles, IStackProps, IStyleFunctionOrObject, Spinner, SpinnerSize, Stack } from "@fluentui/react";

const LoadingStyle:IStackProps = {
    style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0.4",
        backgroundColor: "#cccccc",
        zIndex: "2"
    }
}

const spinnerStyle: IStyleFunctionOrObject<ISpinnerStyleProps, ISpinnerStyles> = {
    circle: {
        borderWidth: "0.2rem",
        borderTopColor: "#000",
        borderLeftColor: "#605e5c",
        borderRightColor: "#605e5c",
        borderBottomColor: "#605e5c"
    }
}

export const Loading: React.FC = () => {
    return <Stack {...LoadingStyle} >
        <Spinner size={SpinnerSize.large} styles={spinnerStyle} />
    </Stack>
}