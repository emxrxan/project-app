import { IStackItemProps, IStackProps, mergeStyles } from "@fluentui/react";
import { ViewPortWidth, mediaQueryForm } from "./MediaQuery";
import React from "react";

export const StackStyle: IStackProps = {
    style: {
        width: "100%",
        height: "100%",
    }
}

export const StackItemContentStyle:IStackItemProps = {
    styles: {
            root:{
            margin: "2rem 1rem",
            marginBottom: "0",
            border: "2px solid #ccc",
            height: "100%",
            borderRadius: "0.3rem",
            [mediaQueryForm(ViewPortWidth.$768)]: {
                margin: "3rem 1rem",
                marginBottom: "0"
            }
        }
    }
}

export const linkStyle = mergeStyles({
    color: "#0078D4",
    fontWeight: "bold"
})

export const stacklinkStyle: IStackItemProps = {
    styles: {
        root:{
            padding: "1rem 1.5rem"
        }
    }
}

export const AppStyle:React.FC = () => {
    return <style>
        {`
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        html, body, #root{
            width: 100%;
            height: 100%;
        }
        `}
    </style>
}