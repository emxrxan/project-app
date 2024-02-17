import {
    IPivotStyleProps, 
    IPivotStyles, 
    IStyleFunctionOrObject,
    IButtonStyles,
} from "@fluentui/react"
import { mediaQueryForm, ViewPortWidth } from "./MediaQuery";

export const pivotStyle: IStyleFunctionOrObject<IPivotStyleProps, IPivotStyles> = {
    root: {
        backgroundColor: "#cccccc",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "0.2rem",
        overflowY: "hidden",
        [mediaQueryForm(ViewPortWidth.$768)]: {
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            height: "0",
            paddingTop: "0",
            paddingRight: "0",
            paddingBottom: "0",
            position: "absolute",
            top: "0",
            right: "0"
        }
    },
    link: {
        fontSize: "1.2rem",
    },
    linkIsSelected: {
        fontWeight: "bold"
    }
}

export const showNavBarStyle: IStyleFunctionOrObject<IPivotStyleProps, IPivotStyles> = {
    root: {
        backgroundColor: "#cccccc",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "0.2rem",
        overflowY: "hidden",
        [mediaQueryForm(ViewPortWidth.$768)]: {
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            height: "auto",
            paddingTop: "0.2rem",
            paddingRight: "3rem",
            paddingBottom: "0.5rem",
            position: "absolute",
            top: "0",
            right: "0"
        }
    },
    link: {
        fontSize: "1.2rem",
    },
    linkIsSelected: {
        fontWeight: "bold"
    }
}

export const DefaultButtonStyles:IButtonStyles = {
    root: {
        display: "none",
        [mediaQueryForm(ViewPortWidth.$768)]: {
            display: "block",
            position: "absolute",
            right: "0",
            margin: "0.5rem",
            padding: "0",
            minWidth: "2.5rem",
            border: "1.2px solid #000",
            fontWeight: "bolder"
        }
    }
}