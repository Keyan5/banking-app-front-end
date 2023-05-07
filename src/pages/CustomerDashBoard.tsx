import { useState } from 'react';
import SideNavBar from '../components/SideNavBar'
import TransactionsStatistics from '../components/TransactionsStatistics';
import CustomerStatistics from '../components/CustomerStatistics';
import ProfitsStatistics from '../components/ProfitsStatistics';
import Settings,{SettingsProps} from '../components/Settings';
import TopCustomers from '../components/TopCustomers';
import CustomerAccount from '../components/Account';
import TransactionHistory from '../components/TransactionHistory';
import Transactions from '../components/Transactions';
import Logout from '../components/Logout';


export interface ThemeProps {
    ChangeThemeHandler: ()=>void;
    theme: string
}

const Menus = {
    Account: true,
    Transactions:false,
    "Transaction History": false,
    "Transaction Statistics":false,
    Logout: false
}



const DashBoard = ({ChangeThemeHandler,theme}:ThemeProps) => {

    const [currentMenuItem,setCurrentMenuItem] = useState<{[key:string]:boolean}>(Menus);

    return (
        <div className='flex bg-white dark:bg-black w-screen overflow-hidden'>
            <div className="">
                <SideNavBar menus={currentMenuItem} setCurrentMenuItem = {setCurrentMenuItem} ChangeThemeHandler={ChangeThemeHandler} theme={theme} />
            </div>
            <div className='w-full h-full'>
                {currentMenuItem.Account?<CustomerAccount />:null}
                {currentMenuItem["Transaction History"]?<TransactionHistory/>:null}
                {currentMenuItem.Transactions?<Transactions/>:null}
                {currentMenuItem["Transaction Statistics"]?<TransactionsStatistics/>:null}
                {currentMenuItem["Top Customers"]?<TopCustomers/>:null}
                {currentMenuItem.Logout?<Logout/>:null}
            </div>
        </div>
    );
}

export default DashBoard