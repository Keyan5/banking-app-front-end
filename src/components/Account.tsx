import {faCopy} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useEffect, useState} from 'react';
import PasswordChanger from './PasswordChanger';
import axios from '../assets/axiosConfig';
import Loading from '../pages/Loading';
import ErrorPage from '../pages/ErrorPage';
import { useNavigate } from 'react-router-dom';

interface Account {
    uid: string,
    name: string,
    balance: number,
    lastlogin: Date,
    count: number,
    accNo: number
}

const CustomerAccount = () => {

    const [copied,setCopied] = useState(false);

    const [ account,setAccount ] = useState<Account>();
    

    const [loading,setLoading] = useState(true);

    const navigate = useNavigate();

    const handleCopyClick = (value : string) => {
        navigator
            .clipboard
            .writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); 
    };

    useEffect(() => {
        const getAccountDetails = async () =>{
            setLoading(true)
            try{
                const token = localStorage.getItem('token');
                const accountResponse = await axios.get(`/Profile`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }}
                );
                setAccount(accountResponse.data);
            }catch(error){
                console.error(error);
                navigate('/error') 
            }finally{
                setLoading(false)
            }
        }
        getAccountDetails();
    }, [])
    

    return (    
        <>
        {loading&&<Loading/>}
        {!loading&&account&&
        <div className="flex justify-center items-center w-full h-screen ">                    
            {copied && (
                        <span
                            className="absolute h-8 top-1/2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-white bg-gray-800 dark:bg-blue-500 dark:text-black rounded-md">
                            Copied!
                        </span>
                    )}
            <div
                className="flex flex-col justify-center items-center w-11/12 md:w-1/2 h-fit py-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
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
                        <h1 className="text-xl font-semibold  hover:mr-2 pl-2">{account.accNo}</h1>
                        <FontAwesomeIcon
                            className='hidden dark:text-white text-xl group-hover:block '
                            icon={faCopy}
                            onClick={() => handleCopyClick(`${account.accNo}`)}/> 
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
                <PasswordChanger/>
            </div>
        </div>
        }
    </>
    )
}

export default CustomerAccount