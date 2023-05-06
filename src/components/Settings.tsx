import ToggleButton from "./ToggleTheme";

export interface SettingsProps {
    ChangeThemeHandler: ()=>void;
    theme: string
}

const Settings = ({ChangeThemeHandler,theme}:SettingsProps) => {
    return (
    <div className='flex flex-col justify-center items-center space-y-16 md:px-2 md:py-2 md:space-y-4 h-screen '>
        <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 ">Settings</h5>
        <div className="flex px-4 pt-2">
            <p className=' dark:text-gray-300 text-darkTheme pr-5'>Dark</p>
            <ToggleButton Toggler={ChangeThemeHandler} theme={theme} />
        </div>
    </div>
    )
}

export default Settings