import { DetailsList, DetailsListLayoutMode, Icon, IconButton, SelectionMode } from "@fluentui/react";
import React from "react";

export interface IDocument {
    einnahmeIcon: string,
    date: Date,
    betrag: number,
    deleteButton: string
  }

export const ListItem: React.FC = () => {
    const test: IDocument[] = [
        {einnahmeIcon: "BoxAdditionSolid", date: new Date("12.02.2024"), betrag: 12.21, deleteButton: "Delete"}, 
        {einnahmeIcon: "BoxSubtractSolid", date: new Date("10.02.2024"), betrag: 12.21, deleteButton: "Delete"}
    ] 
    
    return <>
        <DetailsList 
            items={test} 
            columns={[
                {key: "1", name: "EinnahmeType",iconName: 'FinancialSolid',
                isIconOnly: true, minWidth: 1, maxWidth: 100, isResizable: true, onRender: (item: IDocument) => {
                    return <span><Icon iconName={`${item.einnahmeIcon}`} /></span>
                  }}, 
                {key: "2", name: "Date", minWidth: 1, maxWidth: 100, isResizable: true, onRender: (item: IDocument) => {
                    return <span>{item.date.toLocaleDateString("de-DE")}</span>
                }},
                {key: "3", name: "Betrag", minWidth: 1, maxWidth: 100, isResizable: true, onRender: (item: IDocument) => {
                    return <span>{item.betrag} €</span>
                }},
                {key: "4", name: "", minWidth: 1, maxWidth: 100, isResizable: true, onRender: (item: IDocument) => {
                    return <span><IconButton iconProps={{iconName: item.deleteButton}}/></span>
                }},
            ]}
            isHeaderVisible={true}
            layoutMode={DetailsListLayoutMode.fixedColumns}
            selectionMode={SelectionMode.none}
        />
    </>
}