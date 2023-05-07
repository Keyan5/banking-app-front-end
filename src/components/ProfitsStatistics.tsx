import { useEffect, useState } from 'react';
import axios from '../assets/axiosConfig';
import LineChart from './LineChart';

const label = "Profits"

const borderColor = 'rgb(11, 191, 29)'

const backgroundColor = 'rgba(11, 191, 29, 0.5)'

const title = "PROFIT MADE OVER THIS YEAR"

const ProfitsStatistics = () => {

    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const getProfit = async () => {
            const response = await axios.get('/Profit', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data);
        }
        getProfit();
    }, [])

    return (
        <div className='flex flex-col justify-center items-center space-y-16 md:px-2 md:py-2 md:space-y-4 h-screen '>
            <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 ">Profit Statistics</h5>
            {/* <div className="flex">
                <h1 className="text-2xl font-semibold dark:text-gray-300 text-gray-900 text-center">Last Month </h1>
                <p className='text-2xl font-semibold text-green-500 pl-3'>+54%</p>
            </div> */}
            <div className="w-screen md:w-11/12 md:pl-6 ">
                < LineChart datum={data} labels={[]} label={label} borderColor={borderColor} backgroundColor = {backgroundColor} title={title}/>
            </div>
        </div>
    );
}
export default ProfitsStatistics