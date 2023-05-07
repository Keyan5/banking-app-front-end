import {useState} from 'react';
import axios from '../assets/axiosConfig';
import { useNavigate } from 'react-router';

const Transfer = () => {
    const [accountNumber,
        setAccountNumber] = useState('');
    const [amount,
        setAmount] = useState('');
    const [errorMsg,
        setErrorMsg] = useState('');
    const [success,setSuccess] = useState("");

    const navigate = useNavigate()


    const handleAccountNumberChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setAccountNumber(event.target.value);
    };

    const handleAmountChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event : React.FormEvent < HTMLFormElement >) => {
        event.preventDefault();

        const amountNum = Number(amount);
        const accountNum = Number(accountNumber);
        if (isNaN(amountNum) || amountNum <= 0 || accountNum <= 0 || isNaN(accountNum)) {
            setErrorMsg('InValid amount or Account Number');
            return;
        }

        handleTransfer(amountNum,accountNum);

    };

    const handleTransfer = async (amount:number,accountNumber:number) => {
        const token = localStorage.getItem('token')
        try{
            const response = await axios.post("/pay",JSON.stringify({
                amount,
                payeeId: accountNumber
            }),
            {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            }
            );
            if(response.data.errormessage)
            {
                setErrorMsg(response.data.errormessage);
                setTimeout(() => setErrorMsg(""), 3000);
                return;
            }
            setErrorMsg('');
            setSuccess(response.data.status);
            setAmount("");
            setAccountNumber("");
            setTimeout(() => setSuccess(""), 3000);
        }catch(error){
            console.error(error);
            navigate("/error");
        }
    }   

    return (
        <div className="bg-transparent shadow-md rounded px-8  ">
            <form
                onSubmit={handleSubmit}
                className="">
                <div className="">
                    <label className="block dark:text-gray-300 text-gray-700 font-bold mb-2" htmlFor="accountNumber">
                        Account Number 
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-300 bg-transparent text-gray-700 leading-tight  outline-none focus:outline-none focus:shadow-outline"
                        id="accountNumber"
                        type="number"
                        placeholder="Enter account number"
                        value={accountNumber}
                        onChange={handleAccountNumberChange}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={handleAmountChange}/> {errorMsg && <p className="text-red-500 text-sm italic mt-2">{errorMsg}</p>}
                </div>
                <div className="flex items-center justify-center mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Transfer
                    </button>
                </div>
            </form>
            {success&&<div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 relative" role="alert">
                {success}
            </div>}
        </div>
    );
};

export default Transfer;
