import { Stack, CommandBar } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { navigationContainerStyles } from "./NavigationBar.styles";

export const NavigationBar: React.FC = () => {
    const navigateTo = useNavigate()

    const NavigateTo = (path: string) => {
        navigateTo(path)
    }

    const AllPages = [{
        key: 'Home',
        name: 'Home',
        onClick: () => {NavigateTo('/')}, 
        split:true,
        subMenuProps: {
            items: [
                {
                    key: 'HaushaltRechner',
                    name: 'Haushalt-Rechner',
                    onClick: () => {NavigateTo('/HaushaltRechner')}, 
                },
                {
                    key: 'Login',
                    name: 'Login',
                    onClick: () => {NavigateTo('/Login')}, 
                },
                {
                    key: 'MovieApp',
                    name: 'Movie-App',
                    onClick: () => {NavigateTo('/MovieApp')}, 
                },
                {
                    key: 'TicTacToe',
                    name: 'Tic-Tac-Toe',
                    onClick: () => {NavigateTo('/TicTacToe')}, 
                },
                {
                    key: 'Twitter',
                    name: 'Twitter',
                    onClick: () => {NavigateTo('/Twitter')}, 
                },
                {
                    key: 'Vokabeltrainer',
                    name: 'Vokabeltrainer',
                    onClick: () => {NavigateTo('/Vokabeltrainer')}, 
                }
            ]
        }
    }]

    return <Stack.Item styles={navigationContainerStyles}>
        <CommandBar items={AllPages} />
    </Stack.Item>
}