import { useEffect, useState } from 'react';
import LineChart from './LineChart';
import axios from '../assets/axiosConfig';

const label = "Customers"

const borderColor = 'rgb(54, 0, 250)'

const backgroundColor = 'rgba(54, 0, 250, 0.5)'

const title = "CUSTOMERS GAINED OVER THIS WEEK"

const customerStatistics = () => {

    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const getCustomers = async () => {
            const response = await axios.get('/UserCount', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data);
        }
        getCustomers();
    }, [])

    return (
        <div className='flex flex-col justify-center items-center space-y-16 md:px-2 md:py-2 md:space-y-4 h-screen '>
            <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 ">Customers Statistics</h5>
            {/* <div className="flex">
                <h1 className="text-2xl font-semibold dark:text-gray-300 text-gray-900 text-center">Last Month </h1>
                <p className='text-2xl font-semibold text-green-500 pl-3'>+54%</p>
            </div> */}
            <div className="w-screen md:w-11/12 md:pl-6">
                < LineChart datum={data} labels={[]} label={label} borderColor={borderColor} backgroundColor = {backgroundColor} title={title}/>
            </div>
        </div>
    );
}
export default customerStatistics