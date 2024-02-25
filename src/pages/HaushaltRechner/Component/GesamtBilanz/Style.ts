import { ISeparatorStyleProps, ISeparatorStyles, IStackItemProps, IStyleFunctionOrObject, ITextProps, mergeStyles } from "@fluentui/react"
import { appTheme } from "../../../../AppTheme/appTheme"

export const gesamtStyle: IStackItemProps = {
    styles: {
        root: {
            display: 'flex',
            justifyContent: 'felx-start',
            gap: '1rem',
            color: '#000',
            backgroundColor: '#ccc',
            padding: '0.5rem',
        }
    }
}

export const einnahmeTextStyle: ITextProps = {
    styles: {
        root: {
            backgroundColor: `${appTheme.GREY}`,
        }
    }
}

export const ausgabeTextStyle: ITextProps = {
    styles: {
        root: {
            backgroundColor: `${appTheme.GREY}`,
        }
    }
}

export const neutralTextStyle: ITextProps = {
    styles: {
        root: {
            backgroundColor: `${appTheme.RED}`,
        }
    }
}

export const separatorStyle: IStyleFunctionOrObject<ISeparatorStyleProps, ISeparatorStyles> = {
    content: {
        border: '1px solid #000',
        color: '#000',
        height: '100%',
        opacity: '0.05'
    },
    root: {
        '::after': {
            backgroundColor: 'transparent'
        }
    }
}

export const textStyles = mergeStyles({
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '0.2rem',
    fontSize: '1.1rem',
    cursor: 'default'
})