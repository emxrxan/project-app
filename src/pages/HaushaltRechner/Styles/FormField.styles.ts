import { IStackItemStyles, IStackStyles, mergeStyleSets } from "@fluentui/react";
import { ViewPortWidth, mediaQueryForm } from "../../../MediaQuery";
import { ThemeColor } from "../../../ThemeColor";

export const FormContainerStyles = mergeStyleSets({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
})

export const FormFieldStyles: IStackStyles = {
    root: {
        width: '50%',
        minWidth: '375px',
        padding: '1rem',
        borderRadius: '0.2rem',
        boxShadow: `0 0 1rem ${ThemeColor.BLACK_0000008C}`,
        [mediaQueryForm(ViewPortWidth.$425)]:{
            width: '100%',
            minWidth: '1px'
        }
    }
}

export const FormFieldItemStyles: IStackItemStyles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        [mediaQueryForm(ViewPortWidth.$425)]:{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '0'
        }
    }
}

export const InputWidth = mergeStyleSets(
    {
        root: {
            width: '75%',
            minWidth: '10rem',
            [mediaQueryForm(ViewPortWidth.$425)]:{
                width: '100%',
                minWidth: '1rem'
            }
        }
    }
)

export const ChoiceStyleItemContainer = mergeStyleSets({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        [mediaQueryForm(ViewPortWidth.$425)]:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2rem'
        }
    }
})

export const ChoiceStyleContainer = mergeStyleSets({...{...InputWidth}, 
    flexContainer: {
        display: 'flex', 
        gap: '1rem',
    }
})

export const ButtonStyleItemContainer = mergeStyleSets({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        [mediaQueryForm(ViewPortWidth.$425)]:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2rem'
        }
    }
})