import { useEffect, useState } from 'react';
import LineChart from './LineChart';
import axios from '../assets/axiosConfig';

const label = "Transanctions"

const borderColor = 'rgb(53, 162, 235)'

const backgroundColor = 'rgba(53, 162, 235, 0.5)'

const title = "TRANSACTIONS MADE OVER THIS WEEK"

const TransactionsStatistics = () => {

    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const getTransactions = async (url:string) => {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data);
        }
        const role = localStorage.getItem('role')
        if(window.location.pathname === '/dashboard')
            getTransactions('/UserTransactionCount');
        else if(role === 'ROLE_ADMIN')
            getTransactions('/TransactionCount');
    }, [])

    return (
        <div className='flex flex-col justify-center items-center space-y-16 md:px-2 md:py-2 md:space-y-4 h-screen '>
            <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 ">Transactions Statistics</h5>
            {/* <div className="flex ">
                <h1 className="text-2xl font-semibold dark:text-gray-300 text-gray-900 text-center">Last Month </h1>
                <p className='text-2xl font-semibold text-green-500 pl-3'>+54%</p>
            </div> */}
            <div className="w-screen md:w-11/12 md:pl-6">
                < LineChart datum={data} labels={[]} label={label} borderColor={borderColor} backgroundColor = {backgroundColor} title={title}/>
            </div>
        </div>
    );
}
export default TransactionsStatistics