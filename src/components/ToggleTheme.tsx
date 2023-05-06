import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ThemeProps } from "../pages/CustomerDashBoard";

export default function ToggleTheme({ChangeThemeHandler,theme}:ThemeProps) {
    const [enabled, setEnabled] = useState(theme=='dark'?true:false);
    return (
        <div 
            onClick = {()=>{
                    setEnabled(!enabled)
                    ChangeThemeHandler();
                }}>
            <FontAwesomeIcon 
                className={`w-5 h-5 p-2 rounded-md dark:text-white }`} 
                icon={faMoon} 
                style = {{ 
                        backgroundColor: enabled?"#1455d9":"",
                    }}
            />
        </div>
    );
}