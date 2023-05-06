import {useState} from 'react';

interface TransferProps {
    balance : number;
}

const Transfer = ({balance} : TransferProps) => {
    const [accountNumber,
        setAccountNumber] = useState('');
    const [amount,
        setAmount] = useState('');
    const [errorMsg,
        setErrorMsg] = useState('');

    const handleAccountNumberChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setAccountNumber(event.target.value);
    };

    const handleAmountChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event : React.FormEvent < HTMLFormElement >) => {
        event.preventDefault();

        const amountNum = Number(amount);
        if (isNaN(amountNum) || amountNum <= 0) {
            setErrorMsg('Please enter a valid amount.');
            return;
        }

        if (amountNum > balance) {
            setErrorMsg('Insufficient balance.');
            return;
        }

        // Here you can make an API call or update the state to reflect the transfer
        console.log(`Transfer ${amountNum} to account ${accountNumber}`);
    };

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
        </div>
    );
};

export default Transfer;
