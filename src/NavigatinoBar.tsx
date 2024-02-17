import React,{ useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
    Pivot, 
    PivotItem, 
    DefaultButton
} from "@fluentui/react"
import { DefaultButtonStyles, pivotStyle, showNavBarStyle } from "./NavigationBarStyles";
import { Loading } from "./Loading";
import { pages } from "./NavigationBarPages";

export const NavigationBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const currentPath = location.pathname    

    const onNavigate = (link ?: PivotItem) => {
        if (link !== null) {
            setIsLoading(true)
            navigate(`/${link?.props.headerText}`, { replace: true })
            setTimeout(() =>  {
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
                <PivotItem headerText="HaushaltRechner" itemKey={`${pages.HaushaltRechner}`} />
                <PivotItem headerText="Login" itemKey={`${pages.Login}`} />
                <PivotItem headerText="MovieApp" itemKey={`${pages.MovieApp}`} />
                <PivotItem headerText="TicTacToe" itemKey={`${pages.TicTacToe}`} />
                <PivotItem headerText="Twitter" itemKey={`${pages.Twitter}`} />
                <PivotItem headerText="VokabelTrainer" itemKey={`${pages.VokabelTrainer}`} />
            </Pivot>

            <DefaultButton 
                iconProps={ {iconName: "GlobalNavButton"} } 
                styles={DefaultButtonStyles} 
                onClick={() => isClicked ? setIsClicked(false) : setIsClicked(true) }
            />
        </>
}