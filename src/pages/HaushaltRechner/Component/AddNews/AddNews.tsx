import { ActionButton } from "@fluentui/react";
import React from "react";
import { IconProps, actionButtonStyle } from "./Style";

export const AddNews: React.FC = () => {
    return <>
        <ActionButton {...actionButtonStyle} text="Add News" iconProps={{...IconProps}}/>
    </>
}