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
                            { key: 'Januar', text: 'Januar', data: 'Januar2024'},
                            { key: 'Febuar', text: 'Febuar', data: 'Febuar2024'}
                        ],
                        onItemClick: (ev, item) => {console.log(':', item?.data)}
                        },
                        text: '2024',
                        split: true,
                        onClick: (ev, item) => {console.log(':',ev, item?.text)}
                    },
                    {
                        key: 'Year2023',
                        subMenuProps: {
                        items: [
                            { key: 'Januar', text: 'Januar', data: 'Januar2023'},
                            { key: 'Febuar', text: 'Febuar', data: 'Febuar2023'}
                        ],
                        onItemClick: (ev, item) => {console.log('item:',ev, item?.data)}
                        },
                        text: '2023',
                        split: true,
                        onClick: (ev, item) => {console.log(':',ev, item?.text)}
                    },
            ]}} />
    </Stack>
}