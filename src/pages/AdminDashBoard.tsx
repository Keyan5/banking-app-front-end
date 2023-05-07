import { useState } from 'react';
import SideNavBar from '../components/SideNavBar'
import TransactionsStatistics from '../components/TransactionsStatistics';
import CustomerStatistics from '../components/CustomerStatistics';
import ProfitsStatistics from '../components/ProfitsStatistics';
import TopCustomers from '../components/TopCustomers';
import ErrorPage from './ErrorPage';
import { ThemeProps } from './CustomerDashBoard';
import Logout from '../components/Logout';
import { useNavigate } from 'react-router-dom';

const Menus = {
    Profits:true,
    "Customers Statistics":false,
    "Transactions Statistics":false,
    "Top Customers":false,
    DashBoard:false,
    Logout:false
}



const DashBoard = ({ChangeThemeHandler,theme}:ThemeProps) => {

    const [currentMenuItem,setCurrentMenuItem] = useState<{[key:string]:boolean}>(Menus);

    const navigate = useNavigate();

    const role = localStorage.getItem('role');

    if(role!=="ROLE_ADMIN")
        return <ErrorPage message='YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE'/>

    if(currentMenuItem.DashBoard)
        navigate('/dashboard')
    
    return (
        <div className='flex bg-white dark:bg-black w-screen overflow-hidden'>
            <div className="">
                <SideNavBar menus={currentMenuItem} setCurrentMenuItem = {setCurrentMenuItem} theme={theme} ChangeThemeHandler={ChangeThemeHandler} />
            </div>
            <div className='w-full h-full'>
                {currentMenuItem.Profits?<ProfitsStatistics/>:null}
                {currentMenuItem['Customers Statistics']?<CustomerStatistics/>:null}
                {currentMenuItem["Transactions Statistics"]?<TransactionsStatistics/>:null}
                {currentMenuItem["Top Customers"]?<TopCustomers/>:null}
                {currentMenuItem.Logout?<Logout/>:null}
            </div>
        </div>
    );
}

export default DashBoard