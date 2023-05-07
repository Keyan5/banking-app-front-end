import {  faArrowLeftLong, faArrowRightLong, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../assets/axiosConfig";
import { useEffect, useState } from "react";
import Loading from "../pages/Loading";
import { useNavigate } from "react-router";

interface transactionDataProps{
    tid: string;
    message: string;
    status: string;
    amount: number;
    balance: number;
    createddate: Date,
}

let transactionDataToShow:transactionDataProps[];

const TransactionHistory = () => {

    const navigate = useNavigate()

    const [startIndex, setStartIndex] = useState(0);

    let pageSize = 5;

    const [transactionData,setTransactionData] = useState<Array<transactionDataProps>>();


    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getTransactionDetails = async () =>{
            setLoading(true);
            try{
                const token = localStorage.getItem('token');
                const transactionResponse = await axios.get("/getTransactions",{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }}
                    );
                    setTransactionData(transactionResponse.data);
                }catch(error){
                    console.error(error);
                    navigate("/error");
                }finally{
                    setLoading(false)
                }
            }
            getTransactionDetails();
        }, [])

    const handleNextClick = () => {
        setStartIndex(startIndex + pageSize);
    };

    const handlePreviousClick = () => {
        setStartIndex(startIndex - pageSize);
    };

    
    if(transactionData)
    transactionDataToShow = transactionData.slice(startIndex, startIndex + pageSize);

    return (
        <>
        {loading&&<Loading/>}
        {!loading&&<div className="flex flex-col justify-center items-center h-screen ">
            <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 mb-20">Transaction History</h5>
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
                                            Date
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Message
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Status
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Amount
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
                                                transactionDataToShow.map((transaction,index)=>
                                                <tr key={startIndex+index+1}>
                                                <td
                                                    className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    <h1 className="text-center">{startIndex+index+1}</h1>
                                                    </td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{transaction.tid}</td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{`${new Date(transaction.createddate).toLocaleDateString()}`}</td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <h1>{transaction.message}</h1>
                                                        </td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {
                                                            transaction.status==='SUCCESS'
                                                            ? <div
                                                            className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                                    <FontAwesomeIcon className="h-3 w-3" icon={faCheck} />
                                                                    <h2 className="text-sm font-normal">success</h2>
                                                                </div>
                                                            : <div
                                                            className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                                                <FontAwesomeIcon className="h-3 w-3" icon={faXmark} />
                                                                <h2 className="text-sm font-normal">Failed</h2>
                                                                </div>
                                                        }
                                                    </td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            {transaction.amount}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {transaction.balance}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    {<a
                        className={`flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 cursor-pointer bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 ${startIndex-pageSize>=0?"":"pointer-events-none"}`}
                        onClick={()=>handlePreviousClick()}
                        >
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        <span>
                            previous
                        </span>
                    </a>}
                    <a
                        className={`flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 cursor-pointer bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 ${(transactionData?(startIndex+pageSize<transactionData.length):0)?"":"pointer-events-none"}`}
                        onClick={()=>handleNextClick()}
                        >
                        <span>
                            Next
                        </span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                </div>
            </section>
        </div>}
    </>
    )}

    export default TransactionHistory
                        