import React from "react";

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