import React,{ useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
    Pivot, 
    PivotItem, 
    DefaultButton
} from "@fluentui/react"
import { DefaultButtonStyles, pivotStyle, showNavBarStyle } from "./NavigationBarStyles";
import { Loading } from "./Loading";

export const NavigationBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const currentPath = location.pathname    

    const onNavigate = (link ?: PivotItem) => {
        if (link !== null) {
            setIsLoading(true)
            setTimeout(() =>  {
                navigate(`/${link?.props.headerText}`, { replace: true })
                setIsLoading(false)
            }, 3000);
            setIsClicked(false)
        } else {
            alert("Something went Wrong!")
        }
    }

    return <>
            {isLoading && <Loading />}
            
            <Pivot
                defaultSelectedKey={currentPath.replace("/","")}
                onLinkClick={ (link) => onNavigate(link) } 
                styles={isClicked ? showNavBarStyle : pivotStyle} 
            >
                <PivotItem headerText="HaushaltRechner" itemKey="HaushaltRechner" />
                <PivotItem headerText="Login" itemKey="Login" />
                <PivotItem headerText="MovieApp" itemKey="MovieApp" />
                <PivotItem headerText="TicTacToe" itemKey="TicTacToe" />
                <PivotItem headerText="Twitter" itemKey="Twitter" />
                <PivotItem headerText="VokabelTrainer" itemKey="VokabelTrainer" />
            </Pivot>

            <DefaultButton 
                iconProps={ {iconName: "GlobalNavButton"} } 
                styles={DefaultButtonStyles} 
                onClick={() => isClicked ? setIsClicked(false) : setIsClicked(true) }
            />
        </>
}