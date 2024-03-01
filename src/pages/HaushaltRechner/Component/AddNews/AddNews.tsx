import { ActionButton, DatePicker, DefaultButton, Dialog, DialogType, Dropdown, DropdownMenuItemType, PrimaryButton, Stack, StackItem, TextField } from "@fluentui/react";
import React, { useState } from "react";
import { IconProps, actionButtonStyle } from "./Style";

export const AddNews: React.FC = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      };

    return <>
        <ActionButton {...actionButtonStyle} text="Add News" iconProps={{...IconProps}} onClick={() => setShowDialog(true)}/>
        <Dialog 
            hidden={!showDialog} 
            onDismiss={() => setShowDialog(false)}
            dialogContentProps={{
                type: DialogType.normal,
                title: 'Add News',
            }}
            modalProps={{
                isBlocking: true,
            }}
        >
            <form onSubmit={handleSubmit} method="post">
                <TextField label="Titel" />
                <Dropdown
                    placeholder="..."
                    label="Select an option"
                    options={[
                        { key: 'header', text: 'Options', itemType: DropdownMenuItemType.Header},
                        { key: 'einnahme', text: 'Einnahme' },
                        { key: 'ausgabe', text: 'Ausgabe' }
                    ]}
                />
                <DatePicker
                    showWeekNumbers={true}
                    firstWeekOfYear={1}
                    showMonthPickerAsOverlay={true}
                    placeholder="Select a date..."
                    label="Select a date"
                />
                <Stack horizontal={true} horizontalAlign={"space-between"} >
                    <StackItem>
                        <DefaultButton 
                            text="Cancel"
                            iconProps={{iconName: 'Cancel'}}
                        />
                    </StackItem>
                    <StackItem>
                        <PrimaryButton 
                            text="Create"
                            iconProps={{iconName: 'Add'}}
                        />
                    </StackItem>
                </Stack>
            </form>
        </Dialog>
    </>
}