import { useState } from 'react';
import SideNavBar from '../components/SideNavBar'
import TransactionsStatistics from '../components/TransactionsStatistics';
import CustomerStatistics from '../components/CustomerStatistics';
import ProfitsStatistics from '../components/ProfitsStatistics';
import Settings,{SettingsProps} from '../components/Settings';
import TopCustomers from '../components/TopCustomers';

const Menus = {
    Profits:false,
    Customers:false,
    Transactions:false,
    "Top Customers":true,
    Logout:false
}



const DashBoard = ({ChangeThemeHandler,theme}:SettingsProps) => {

    const [currentMenuItem,setCurrentMenuItem] = useState<{[key:string]:boolean}>(Menus);

    return (
        <div className='flex bg-white dark:bg-black w-screen overflow-hidden'>
            <div className="">
                <SideNavBar menus={currentMenuItem} setCurrentMenuItem = {setCurrentMenuItem} theme={theme} ChangeThemeHandler={ChangeThemeHandler} />
            </div>
            <div className='w-full h-full'>
                {currentMenuItem.Profits?<ProfitsStatistics/>:null}
                {currentMenuItem.Customers?<CustomerStatistics/>:null}
                {currentMenuItem.Transactions?<TransactionsStatistics/>:null}
                {currentMenuItem["Top Customers"]?<TopCustomers/>:null}
            </div>
        </div>
    );
}

export default DashBoard