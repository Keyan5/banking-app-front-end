import { useState } from "react"
import CloseSymbol from "./CloseSymbol"
import HamburgerMenu from "./HamburgerMenu"
import ToggleButton from "./ToggleTheme"
import { ThemeProps } from "../pages/CustomerDashBoard"

interface SideNavBarProps extends ThemeProps {
    menus : {
        [key : string]: boolean
    }
    setCurrentMenuItem : React.Dispatch < React.SetStateAction < {
        [key : string]: boolean
    } >>
}

const SideNavBar = ({menus, setCurrentMenuItem,theme,ChangeThemeHandler} : SideNavBarProps) => {

    const [open,setOpen] = useState<boolean>(false);

    const handleMenuClick = (title : string) => {


        const newMenus = {
            ...menus
        };
        Object
            .keys(newMenus)
            .forEach(key => {
                newMenus[key] = false;
            });
        newMenus[title] = true;
        setCurrentMenuItem(newMenus);
    };

    return (
        <>
            <button
                title='Menu'
                className={`py-3 px-4 mx-2 rounded focus:outline-none dark:hover:bg-light-white hover:bg-slate-50 absolute top-3 ${open?"left-[13rem]":"left-0"}`}
                onClick={() => setOpen(!open)}>
                {open
                    ? <CloseSymbol/>
                    : <HamburgerMenu/>}
            </button>
            <div
                className={` w-52 ${open?"block":"hidden"} dark:bg-gray-900 bg-slate-200 h-screen p-5 pt-8 relative text-center `}>
                <div className="flex gap-x-4 items-center">
                    <img
                        src="/logo-transparent.svg"
                        className={`w-10 cursor-pointer`}
                        alt='logo.svg'/>
                    <h1 className={`dark:text-white text-black font-medium text-xl`}>
                        BANKEASE
                    </h1>
                </div>
                <ul className="pt-6 mt-6">
                    {
                    Object.keys(menus).map((key, index) => (
                        <li
                            key={index}
                            onClick={() => handleMenuClick(key)}
                            className={`rounded-md p-2 my-4 cursor-pointer dark:hover:bg-light-white hover:bg-slate-50 dark:text-gray-300 text-md font-medium mx-6 gap-x-4 mt-2 ${menus[key] && "dark:bg-light-white bg-slate-50"} `}>
                            <span className="">
                                {key}
                            </span>
                        </li>
                    ))}
                    <li>
                        <ToggleButton ChangeThemeHandler={ChangeThemeHandler} theme={theme} />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideNavBar