import { useState } from "react";
import Deposit from "./Deposit"
import Transfer from "./Transfer"
import Withdraw from "./Withdraw"

const balance = 10000;

const Transactions = () => {

    const [deposit,setDeposit] = useState(false);
    const [withdraw,setWithdraw] = useState(false);
    const [transfer,setTransfer] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center w-screen md:w-full h-screen space-y-8 dark:text-white text-black">
            <h5 className="px-4 pt-2 text-3xl font-bold text-gray-900 dark:text-gray-300 ">Transactions</h5>
            <div className="md:flex w-11/12 space-y-8">
                <div className="flex flex-col items-center md:w-1/3 md:pt-8">
                    <button 
                        className="text-2xl font-bold mb-2 "
                        onClick={()=>
                            {
                                setDeposit(!deposit)
                                setTransfer(false)
                                setWithdraw(false)
                            }
                        }
                        >
                            Deposit
                        </button>
                    {deposit?<Deposit/>:null}
                </div>
                <div className="flex flex-col items-center md:w-1/3">
                    <button 
                        className="text-2xl font-bold text-center mb-2"
                        onClick={()=>
                            {
                                setDeposit(false)
                                setTransfer(!transfer)
                                setWithdraw(false)
                            }
                        }
                        >
                            Transfer
                    </button>
                    {transfer?<Transfer/>:null}
                </div>
                <div className="flex flex-col items-center md:w-1/3 ">
                    <button
                        className="text-[1.4rem] font-bold mb-2 "
                        onClick={()=>
                            {
                                setDeposit(false)
                                setTransfer(false)
                                setWithdraw(!withdraw)
                            }
                        }
                        >
                            Withdraw
                    </button>
                    {withdraw?<Withdraw/>:null}
                </div>
            </div>
        </div>
    )
}

export default Transactions