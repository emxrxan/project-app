import React, { FormEvent, useState } from "react";

import { 
    ChoiceGroup, 
    DefaultButton, 
    IChoiceGroupOption, 
    Label, 
    MaskedTextField, 
    PrimaryButton, 
    Stack, 
    TextField  
} from "@fluentui/react";

import { 
    ButtonStyleItemContainer,
    ChoiceStyleContainer, 
    ChoiceStyleItemContainer, 
    FormContainerStyles, 
    FormFieldItemStyles, 
    FormFieldStyles, 
    InputWidth 
} from "../Styles/FormField.styles";

export const FormField:React.FC = () => {
    const [eintrag, setEintrag] = useState<string>('')
    const [betrag, setBetrag] = useState<string>('0')
    const [date, setDate] = useState<string>('')
    const [typ, setTyp] = useState<string>('einnahme')

    const onhandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(eintrag);
        console.log(betrag);
        console.log(date);
        console.log(typ);
    }


    return <form onSubmit={onhandleSubmit} style={FormContainerStyles}>
        <Stack tokens={{childrenGap: 10}} styles={FormFieldStyles}>
            <Stack.Item styles={FormFieldItemStyles}>
                <Label>Daten:</Label>
                <TextField 
                    placeholder="Eintrag"
                    value={eintrag}
                    onChange={(event, newValue) => setEintrag(newValue as string)}
                    styles={InputWidth}
                /> 
            </Stack.Item>

            <Stack.Item styles={FormFieldItemStyles}>
                <Label>Betrag:</Label>
                <TextField
                    type="number"
                    min={0}
                    step={0.01}
                    styles={InputWidth}
                    value={betrag}
                    onChange={(event, newValue) => setBetrag(newValue as string)}
                    onBlur={(event) => setBetrag(parseFloat(event.currentTarget.value).toFixed(2))}
                />
            </Stack.Item>

            <Stack.Item styles={FormFieldItemStyles}>
                <Label>Datum:</Label>
                <MaskedTextField
                    mask="99/99/9999" 
                    iconProps={{ iconName: 'DateTime' }}
                    value={date}
                    onChange={(event, newValue) => setDate(newValue as string)}
                    styles={InputWidth}
                />
            </Stack.Item>

            <Stack.Item styles={ChoiceStyleItemContainer}>
                <Label>Typ:</Label>
                <ChoiceGroup 
                    options={[
                        {
                            key: "einnahme",
                            text: "Einnhame +"
                        },
                        {
                            key: "ausgabe",
                            text: "Ausgabe -"
                        }
                    ]}
                    selectedKey={typ}
                    onChange={(event, newValue) => setTyp((newValue as IChoiceGroupOption).key)}
                    required 
                    styles={ChoiceStyleContainer}
                />
            </Stack.Item>

            <Stack.Item styles={ButtonStyleItemContainer}>
                <DefaultButton text={"Abbrechen"} type="submit"/>
                <PrimaryButton text={"Senden"} type="submit"/>
            </Stack.Item>
        </Stack>
    </form>
}