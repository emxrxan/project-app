import { Dialog, DialogType, FocusZone, FocusZoneDirection, FontIcon, List, Separator, Stack, StackItem } from "@fluentui/react";
import React, { ReactNode, useState } from "react";
import { SeparatorStyles, StackStyles, classNames, dialogStyles, flexList } from "./HomeStyles";

export const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    const onRenderCell = (item?: string): ReactNode => {
      return <div data-is-focusable className={flexList}>
        <FontIcon iconName="BoxCheckmarkSolid" className={classNames.deepSkyBlue}/>
        <span>
            <strong>{item}</strong>
        </span>
      </div> 
    } 

    return <Dialog 
            hidden={isOpen} 
            dialogContentProps={{
                type: DialogType.normal,
                title: 'Project-Portfolio',
                subText: 'Welcome to my portfolio, where I present some of my favorite projects. I hope you enjoy exploring them! "😊"',
            }}
            modalProps={{
                isBlocking: true,
            }}
            onDismiss={() => setIsOpen(true)}
            styles={dialogStyles}
         >
        <FocusZone direction={FocusZoneDirection.horizontal}>
            <Stack {...StackStyles}>
                <StackItem>
                    <h3>Frontend:</h3>
                    <div data-is-scrollable>
                        <List items={["React", "Typscript","Fluent UI"]} onRenderCell={onRenderCell} />
                    </div>
                </StackItem>
                <StackItem>
                    <Separator vertical styles={SeparatorStyles} />
                </StackItem>
                <StackItem>
                    <h3>Backend:</h3>
                    <div data-is-scrollable>
                        <List items={["C#", "ASP.NET","DataBase"]} onRenderCell={onRenderCell} />
                    </div>
                </StackItem>
            </Stack>
        </FocusZone>
    </Dialog>
}