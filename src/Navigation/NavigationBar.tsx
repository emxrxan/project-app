import { Stack, CommandBar, Toggle, Icon } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

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
                    onClick: () => {NavigateTo('Login')}, 
                },
                {
                    key: 'MovieApp',
                    name: 'Movie-App',
                    onClick: () => {NavigateTo('MovieApp')}, 
                },
                {
                    key: 'TicTacToe',
                    name: 'Tic-Tac-Toe',
                    onClick: () => {NavigateTo('TicTacToe')}, 
                },
                {
                    key: 'Twitter',
                    name: 'Twitter',
                    onClick: () => {NavigateTo('Twitter')}, 
                },
                {
                    key: 'Vokabeltrainer',
                    name: 'Vokabeltrainer',
                    onClick: () => {NavigateTo('Vokabeltrainer')}, 
                }
            ]
        }
    }]

    return <Stack.Item>
        <CommandBar items={AllPages} />
        <Toggle defaultChecked={false} />
    </Stack.Item>
}