import {faCopy} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useEffect, useState} from 'react';
import PasswordChanger from './PasswordChanger';
import axios from 'axios';
import Loading from '../pages/Loading';

interface customerProps {
    uid: String,
    name: String,
    balance: Number,
    lastlogin: Date,
    count: Number
}

const CustomerAccount = () => {

    const [copied,setCopied] = useState(false);

    const [ account,setAccount ] = useState<customerProps>();
    
    const [changePassword,setChangePassword] = useState(true);
    
    const [savePassword,setSavePassword] = useState(false);

    const [loading,setLoading] = useState(true);

    const handleCopyClick = (value : string) => {
        navigator
            .clipboard
            .writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Hide tooltip after 1 second
    };

    useEffect(() => {
        const getAccountDetails = async () =>{
            setLoading(true)
            try{
                const token = localStorage.getItem('token');
                console.log({
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                }})
                const accountResponse = await axios.get(`http://192.168.104.252:8080/api/v1/profile`,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }}
                );
                console.log(accountResponse.data);
                setAccount(accountResponse.data);
            }catch(error){
                console.error(error);
            }
            finally{
                setLoading(false)
            }
        }
        getAccountDetails();
    }, [])
    

    return (    
        <>
        {loading&&<Loading/>}
        {!loading&&
        <div className="flex justify-center items-center w-full h-screen ">                    
            {copied && (
                        <span
                            className="absolute h-8 top-1/2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-white bg-gray-800 dark:bg-blue-500 dark:text-black rounded-md">
                            Copied!
                        </span>
                    )}
            <div
                className="flex flex-col justify-center items-center w-11/12 md:w-1/2 h-fit py-4 bg-slate-300 dark:bg-gray-900 rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">Account</h1>
                <div className="flex flex-col justify-center w-full h-full space-y-4 md:px-10 px-5 text-gray-800 dark:text-gray-200">
                    <div className="flex justify-between rounded-lg w-full dark:opacity-70 opacity-100 hover:opacity-100">
                        <h1 className="text-xl font-semibold  ">Name</h1>
                        <h1 className="text-xl font-semibold  pl-2">{account.name}</h1>
                    </div>
                    <div className="flex justify-between group dark:opacity-70 opacity-100 hover:opacity-100">
                        <h1 className="text-xl font-semibold  ">Customer Id</h1>
                        <h1 className="text-xl font-semibold  pl-2">{account.uid}</h1>
                        <FontAwesomeIcon
                            className='hidden dark:text-white text-xl group-hover:block '
                            icon={faCopy}
                            onClick={() => handleCopyClick(`${account.uid}`)}/> 
                    </div>

                    <div className="flex justify-between group dark:opacity-70 opacity-100 hover:opacity-100">
                        <h1 className="text-xl font-semibold  ">Account Number</h1>
                        <h1 className="text-xl font-semibold  hover:mr-2 pl-2">564189652365</h1>
                        <FontAwesomeIcon
                            className='hidden dark:text-white text-xl group-hover:block '
                            icon={faCopy}
                            onClick={() => handleCopyClick("564189652365")}/> 
                    </div>
                    <div className="flex justify-between dark:opacity-70 opacity-100 hover:opacity-100">
                        <h1 className="text-xl font-semibold  ">Current Balance</h1>
                        <h1 className="text-xl font-semibold  ">₹ {account.balance}</h1>
                    </div>
                    <div className="flex justify-between dark:opacity-70 opacity-100 hover:opacity-100">
                        <h1 className="text-xl font-semibold  ">Total Transactions</h1>
                        <h1 className="text-xl font-semibold  ">{account.count}</h1>
                    </div>
                    <div className="flex justify-between dark:opacity-70 opacity-100 hover:opacity-100">
                        <h1 className="text-xl font-semibold  ">Last Login</h1>
                        <h1 className="text-xl font-semibold  ">{new Date(account.lastlogin).toLocaleString()}</h1>
                    </div>
                </div>
                {changePassword&&<button
                    className={`text-gray-100 dark:text-gray-200 font-medium font-xl bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 w-fit mt-4 p-2 rounded-md`}
                    onClick={()=>{
                        setChangePassword(false)
                        setSavePassword(true)
                    }}
                >
                    Change Password
                </button>}
                {savePassword?<PasswordChanger/>:null}
                {savePassword&&<button
                    className={`text-gray-100 dark:text-gray-200 font-medium font-xl bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 w-fit m-2 p-2 rounded-md`}
                    onClick={()=>{
                        setChangePassword(true)
                        setSavePassword(false)
                    }}
                >
                    Save Password
                </button>}
            </div>
        </div>
        }
    </>
    )
}

export default CustomerAccount