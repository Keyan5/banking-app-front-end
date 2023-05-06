import React from 'react'
import LineChart from './LineChart';

const data = [
    602,
    135,
    458,
    491,
    996,
    -30,
    202,
    101,
    89,
    745,
    742,
    256
]
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const label = "Transanctions"

const borderColor = 'rgb(53, 162, 235)'

const backgroundColor = 'rgba(53, 162, 235, 0.5)'

const title = "TRANSACTIONS MADE OVER THIS YEAR"
console.log(title);

const TransactionsStatistics = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-16 md:px-2 md:py-2 md:space-y-4 h-screen '>
            <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 ">Transactions Statistics</h5>
            <div className="flex ">
                <h1 className="text-2xl font-semibold dark:text-gray-300 text-gray-900 text-center">Last Month </h1>
                <p className='text-2xl font-semibold text-green-500 pl-3'>+54%</p>
            </div>
            <div className="w-screen md:w-11/12 md:pl-6">
                < LineChart datum={data} labels={labels} label={label} borderColor={borderColor} backgroundColor = {backgroundColor} title={title}/>
            </div>
        </div>
    );
}
export default TransactionsStatistics