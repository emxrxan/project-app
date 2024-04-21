import { IPersonaProps, IStackItemStyles, PersonaSize } from "@fluentui/react";
import { ThemeColor } from "../../ThemeColor";

export const HomeContainerStyles: IStackItemStyles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxHeight: 'calc(100% - 46px)',
        backgroundColor: `${ThemeColor.BLACK_0000008C}`,
        position: 'relative'
    }
}

export const sharedPersonaProps: IPersonaProps = {
    size: PersonaSize.size100,
    styles: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
        }
    }
};