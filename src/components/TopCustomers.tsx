import { useEffect, useState } from "react"
import axios from "../assets/axiosConfig"
import Loading from "../pages/Loading";

interface Customer {
    uid: string,
    accNo: string,
    name: string,
    count: number,
    balance: number
}

const TopCustomers = () => {    

    const [customers,setCustomers] = useState<Array<Customer>>();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getCustomers = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/GetTopFiveUsers',{
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
                setCustomers(response.data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        getCustomers();
    }, [])

    return (
        <>
        {   loading&&<Loading/> }
        {!loading&&<div className="flex flex-col justify-center items-center h-screen ">
            <h5 className="px-4 pt-1 text-3xl font-bold text-gray-900 dark:text-gray-300 mb-1">Top Customers</h5>
            <h6 className="px-4 pt-1 text-xl font-bold text-gray-900 dark:text-gray-300 text-center mb-4">Top Customers are listed based on their Balance</h6>
            <section className = "container px-4 mx-auto " > 
                <div className="flex flex-col ">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div
                                className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800 ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <h1 className="text-center">
                                                        SI NO
                                                    </h1>
                                                </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                            Account No
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Name
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Transactions Made
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Balance
                                        </th>

                                    </tr>
                                        </thead>
                                        <tbody
                                            className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                customers&&customers.map((customer,index)=>
                                                <tr key={index}>
                                                <td
                                                    className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    <h1 className="text-center">{index+1}</h1>
                                                    </td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{customer.uid}</td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{customer.accNo}</td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {customer.name}
                                                    </td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            {customer.count}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {customer.balance}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>}
    </>
    )
}

export default TopCustomers