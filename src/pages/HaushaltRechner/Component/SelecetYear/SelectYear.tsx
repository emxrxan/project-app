import { CommandButton, IContextualMenuProps } from "@fluentui/react";
import React from "react";
import { IconProps, MenuItemsStyle } from "./Style";

export const SelectYear: React.FC = () => {

    const menuProps: IContextualMenuProps = {
        styles: MenuItemsStyle,
        items: [
          {
            key: '2014',
            text: '2014',
            iconProps: { iconName: 'DateTime' },
          },
          {
            key: '2015',
            text: '2015',
            iconProps: { iconName: 'DateTime' },
          },
        ],
      };

    return <>
        <CommandButton iconProps={{...IconProps}} text={`2016`} menuProps={menuProps} />
    </>
}