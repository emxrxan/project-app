import { IContextualMenuStyleProps, IContextualMenuStyles, IIconProps, IStyleFunctionOrObject } from "@fluentui/react";
import { appTheme } from "../../../../AppTheme/appTheme";

export const IconProps: IIconProps = {
    iconName: 'DateTime',
    styles: {
        root: {
            fontWeight: 'bold'
        }
        
    }
}

export const MenuItemsStyle: IStyleFunctionOrObject<IContextualMenuStyleProps, IContextualMenuStyles> = {
    container: {
        width: '5rem'
    }
}