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

const label = "Profits"

const borderColor = 'rgb(11, 191, 29)'

const backgroundColor = 'rgba(11, 191, 29, 0.5)'

const title = "PROFIT MADE OVER THIS YEAR"
console.log(title);

const ProfitsStatistics = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-16 md:px-2 md:py-2 md:space-y-4 h-screen '>
            <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 ">Profit Statistics</h5>
            <div className="flex">
                <h1 className="text-2xl font-semibold dark:text-gray-300 text-gray-900 text-center">Last Month </h1>
                <p className='text-2xl font-semibold text-green-500 pl-3'>+54%</p>
            </div>
            <div className="w-screen md:w-11/12 md:pl-6 ">
                < LineChart datum={data} labels={labels} label={label} borderColor={borderColor} backgroundColor = {backgroundColor} title={title}/>
            </div>
        </div>
    );
}
export default ProfitsStatistics