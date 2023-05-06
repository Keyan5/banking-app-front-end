import {useState} from 'react';

const Withdraw = () => {
    const [amount,
        setAmount] = useState("");
    const [error,
        setError] = useState("");

    const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (Number(value) < 1) {
            setError("Amount should be greater than 0");
        } else {
            setError("");
        }
        setAmount(value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Number(amount) < 1) {
            setError("Amount should be greater than 0");
        } else {
            // Perform withdraw action here
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
                        : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent focus:shadow-outline`}
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
        </div>
    );
}

export default Withdraw;
