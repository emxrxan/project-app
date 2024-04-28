import { DetailsList, DetailsRow, Icon, IconButton} from "@fluentui/react";
import { FilterDataMenu } from "./FilterDataMenu";
import React from "react";

export const Details: React.FC = () => {
    return <>
        <FilterDataMenu />
        <DetailsList 
            items={[{Typ: <Icon iconName="add" />, Daten: "Test", Betrag: '1000€', Datum: new Date().toLocaleDateString(), Action: <IconButton iconProps={{iconName: 'delete'}}/>}]} 
            checkboxVisibility={2}
            layoutMode={1}
            onRenderRow={(props) => <>
                    {props && <DetailsRow {...props} styles={{cell: {display: 'flex', alignItems: 'center', fontSize: '1rem'}}}/>}
                </>
            }
        />
    </>
}