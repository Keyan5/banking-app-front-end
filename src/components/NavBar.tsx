import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import ToggleTheme from './ToggleTheme';
import { ThemeProps } from '../pages/CustomerDashBoard';

const NavBar = ({ChangeThemeHandler,theme}:ThemeProps) => {

    if(window.location.pathname==="/dashboard"||window.location.pathname==="/adminDashboard")
        return null;
    return (
        <nav
            className="fixed top-0 left-0 bg-lightTheme dark:bg-darkTheme w-full shadow pt-2 md:pt-0">
            <div
                className="container flex justify-between items-center text-gray-700">
                <h1 className="text-3xl font-sans font-bold text-businessName md:ml-8 ml-4">
                    <Link to={""}>BANKEASE</Link>
                </h1>
                <ul
                    className="hidden md:flex items-center text-base font-semibold cursor-pointer">
                    <Link to={"login"}>
                        <li 
                            className="dark:text-gray-300 text-darkTheme dark:hover:bg-light-white hover:bg-gray-200 my-2 mx-1 py-2 px-3 rounded-md "
                        >
                            Login                           
                        </li>
                    </Link>
                    <Link to={"register"}>
                        <li 
                            className="dark:text-gray-300 text-darkTheme dark:hover:bg-light-white hover:bg-gray-200 my-2 mx-1 py-2 px-3 rounded-md"
                        >
                            Register
                        </li>
                    </Link>
                    <Link to={"contact"} >
                        <li 
                            className="dark:text-gray-300 text-darkTheme dark:hover:bg-light-white hover:bg-gray-200 my-2 mx-1 py-2 px-3 rounded-md"
                        >
                            Contact
                        </li>
                    </Link>
                    <Link to={"about"}>
                        <li 
                            className="dark:text-gray-300 text-darkTheme dark:hover:bg-light-white hover:bg-gray-200 my-2 mx-1 py-2 px-3 rounded-md"
                        >
                            About
                        </li>
                    </Link>
                    <li className='pl-4 pt-1'>
                        <ToggleTheme ChangeThemeHandler={ChangeThemeHandler} theme={theme}/>
                    </li>
                </ul>
                <SideMenu ChangeThemeHandler={ChangeThemeHandler} theme={theme} />
            </div>
        </nav>
    )
}

export default NavBar