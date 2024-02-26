import { IButtonProps, IIconProps } from "@fluentui/react"
import { appTheme } from "../../../../AppTheme/appTheme"

export const actionButtonStyle: IButtonProps = {
    styles: {
        root: {
            marginLeft: 'auto',
            fontWeight: 'bold'
        }
    }
}

export const IconProps: IIconProps = {
    iconName: 'AddTo',
    styles: {
        root: {
            color: appTheme.BLACK,
            fontWeight: 'bold'
        }
        
    }
}