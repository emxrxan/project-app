import { Label, DefaultButton, ContextualMenuItemType, Stack } from "@fluentui/react";
import React from "react";

export const FilterDataMenu: React.FC = () => {
    return <Stack horizontal tokens={{childrenGap: 10}}>
            <Label>Filtere deine Ansicht:</Label>
            <DefaultButton text={"Standart"} menuProps={{items: [
                    { key: 'default', text: 'Standart' },
                    { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
                    {
                        key: 'Year2024',
                        subMenuProps: {
                        items: [
                            { key: 'Januar', text: 'Januar' },
                            { key: 'Febuar', text: 'Febuar'}
                        ],
                        },
                        text: '2024',
                    },
                    {
                        key: 'Year2023',
                        subMenuProps: {
                        items: [
                            { key: 'Januar', text: 'Januar' },
                            { key: 'Febuar', text: 'Febuar'}
                        ],
                        },
                        text: '2023',
                    },
            ]}} />
    </Stack>
}