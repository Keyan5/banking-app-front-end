import {useState} from 'react';
import axios from '../assets/axiosConfig';

const Withdraw = () => {
    const [amount,
        setAmount] = useState("");
    const [error,
        setError] = useState("");
    const [success,setSuccess] = useState("");


    const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (Number(value) < 1 || isNaN(Number(value))) {
            setError("Invalid Amount");
        } else {
            setError("");
        }
        setAmount(value);
    }

    const handleWithdraw = async (amount:number) => {
        const token = localStorage.getItem('token')
        const response = await axios.post("/withdraw",JSON.stringify({
            amount: amount
        }),{
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        if(response.data.status === 'success')
        {
            setSuccess('success,the amount is withdrawn from your account')
            setTimeout(() => setSuccess(""), 3000);
            setAmount("");
        }
        else
            setError(response.data.errormessage);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Number(amount) < 1|| isNaN(Number(amount))) {
            setError("Invalid Amount");
        } else {
            handleWithdraw(Number(amount));
        }
    }

    return (
        <div className="flex flex-col  items-center bg-transparent px-4 pb-4 rounded-lg shadow-md ">
            <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col items-center ">
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className={`appearance-none border ${error
                        ? 'border-red-500'
                        : 'border-gray-300'} rounded w-full py-2 px-3 dark:text-white leading-tight focus:outline-none bg-transparent focus:shadow-outline`}
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e)=>handleAmountChange(e)}/> {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <button
                    className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    type="submit"
                    >
                    Withdraw
                </button>
            </form>
            {success&&<div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 relative" role="alert">
                {success}
            </div>}
        </div>
    );
}

export default Withdraw;
