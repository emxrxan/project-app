import { IStackProps, Link, MessageBar, MessageBarType, Stack, StackItem } from "@fluentui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const StackNotFoundStyle: IStackProps = {
    style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
    }
}

export const NotFound: React.FC = () => {
    const location = useLocation()
    const currentPath = location.pathname

    return <Stack {...StackNotFoundStyle}>
        <StackItem>
        <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>
            Page: <strong>{currentPath}</strong> does not exist -
            <Link href="http://localhost:3000/" underline>
                Visit our website.
            </Link>
        </MessageBar>
        </StackItem>
    </Stack>
}