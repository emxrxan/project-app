import React from "react";
import { HomeContainerStyles, sharedPersonaProps } from "./Home.styles";
import { Persona, PersonaInitialsColor, Stack } from "@fluentui/react";
import { StarAnimation } from "../../StarAnimation/Star";

export const Home:React.FC = () => {
    return <Stack.Item styles={HomeContainerStyles}>
        <StarAnimation />
        <Persona
            initialsColor={PersonaInitialsColor.orange}
            {...sharedPersonaProps}
            text="Emirhan Gürkan"
        />
    </Stack.Item>
}