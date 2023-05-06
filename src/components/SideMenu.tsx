import { useState } from 'react'
import ToggleTheme from './ToggleTheme';
import HamburgerMenu from './HamburgerMenu';
import CloseSymbol from './CloseSymbol';
import { Link } from 'react-router-dom';
import { ThemeProps } from '../pages/CustomerDashBoard';

const SideMenu = ({ChangeThemeHandler,theme}:ThemeProps) => {
    const [open,setOpen] = useState(false);
    return (
        <>
            <button
                title='Menu'
                className="block md:hidden py-3 px-4 mx-2 md:mx-0 rounded focus:outline-none dark:hover:bg-darkHover hover:bg-gray-200 absolute right-0 md:-right-full"
                onClick={() => setOpen(!open)}>
                {open?<CloseSymbol/>:<HamburgerMenu/>}
            </button>
            <div className={`md:hidden absolute top-10 ${open?"right-1":"-right-full"} h-fit w-4/12 dark:bg-sky-950 bg-sky-200 rounded-md`}>
                <ul className="flex flex-col items-center text-base font-semibold cursor-pointer ">
                    <Link to={"/login"}>
                        <li className="dark:text-lightTheme text-darkTheme dark:hover:bg-darkHover hover:bg-gray-200 py-4 px-10 w-full">
                            Login
                        </li>
                    </Link>
                    <Link to={"/register"}>
                        <li className="dark:text-lightTheme text-darkTheme dark:hover:bg-darkHover hover:bg-gray-200 py-4 px-10 w-full">
                            Register
                        </li>
                    </Link>
                    <Link to={"/features"}>
                        <li className="dark:text-lightTheme text-darkTheme dark:hover:bg-darkHover hover:bg-gray-200 py-4 px-10 w-full">
                            Features
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className="dark:text-lightTheme text-darkTheme dark:hover:bg-darkHover hover:bg-gray-200 py-4 px-10 w-full">
                            Contact 
                        </li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="dark:text-lightTheme text-darkTheme dark:hover:bg-darkHover hover:bg-gray-200 py-4 px-10 w-full">
                            About
                        </li>
                    </Link> 
                    <li className='flex px-10 py-4 w-full'><ToggleTheme ChangeThemeHandler={ChangeThemeHandler} theme={theme}/></li>
                </ul>
            </div>
        </>
    )
}

export default SideMenu