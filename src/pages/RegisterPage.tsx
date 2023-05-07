import React, {useEffect, useState} from "react";
import DatePicker from "../components/DatePicker";
import axios from "../assets/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import RegisterSuccess from "../components/RegisterSuccess";

export interface RegisterPageProps {
    theme : string;
}

const RegisterPage = ({theme} : RegisterPageProps) => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pan, setPan] = useState<string>("");
    const [aadhar, setAadhar] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [DOB, setDOB] = useState<Date>(new Date());
    const [address, setAddress] = useState<string>("");

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const regData = {
            name,
            email,
            address,
            password: "secret", 
            mobile:phone,
            aadarno: aadhar,
            panno: pan,
            dateOfBirth: DOB
        }
        try{
            const regRes = await axios.post("/auth/register",regData)
            console.log(regRes.data);
            navigate("/regiterSuccess");
        }catch(error){
            setError(true);
            setTimeout(()=>setError(false),3000);
            console.log(error);
        }
    };

    return (
        <>
        {error&&
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="bg-red-500 dark:bg-red-600 rounded-md text-white dark:text-gray-100 text-center py-2 px-4">
                <p>Registration Failed</p> 
                <p>Check the information provided and try Again</p>
            </div>
        </div>
        }
        { !error&&
        <div
            className="dark:bg-darkTheme bg-lightBlend min-h-screen min-w-screen flex justify-center items-center">
            <div
                className="dark:bg-darkBlend bg-lightTheme sm:w-2/3 md:w-5/6 h-4/5 my-10 rounded-lg text-center w-11/12 mt-20 overflow-x-auto">
                <div className="flex justify-center items-center h-full w-full">
                    <div
                        className="sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3 w-full bg-white dark:bg-black rounded-lg shadow-lg p-6">
                        <div className="flex flex-col justify-center items-center h-full w-full">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Register</h1>
                            {theme==="dark"?<img src="/logo-transparent.svg" className="w-1/2 md:1/4 lg:1/6 my-2" alt="BankEase"/>:<img src="/logo-black-on-white-transparent.svg" className="w-1/2 md:1/4 lg:1/6 mt-5" alt="BankEase"/>}
                        </div>
                        <form 
                            className="flex flex-col justify-center items-center w-full"
                            onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{handleRegister(e)}}
                        >
                            <label
                                htmlFor="name"
                                className="text-gray-800 dark:text-white text-lg font-semibold my-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full h-10 rounded-lg px-3 bg-transparent border border-gray-300 text-gray-800 dark:text-white focus:outline-none mb-4"
                                required
                                value={name}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}}
                            />

                            <label
                                htmlFor="email"
                                className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full h-10 rounded-lg px-3 bg-transparent border border-gray-300 text-gray-800 dark:text-white focus:outline-none mb-4"
                                required
                                value={email}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}
                            />

                            

                            <label
                                htmlFor="pan"
                                className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                                PAN Number:
                            </label>
                            <input
                                type="text"
                                id="pan"
                                className="w-full h-10 rounded-lg px-3 bg-transparent border border-gray-300 text-gray-800 dark:text-white focus:outline-none mb-4"
                                required
                                value={pan}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPan(e.target.value)}}
                            />

                            <label
                                htmlFor="aadhar"
                                className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                                Aadhar Number:
                            </label>
                            <input
                                type="number"
                                id="aadhar"
                                className="w-full h-10 rounded-lg px-3 bg-transparent border border-gray-300 text-gray-800 dark:text-white focus:outline-none mb-4"
                                required
                                value={aadhar}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setAadhar(e.target.value)}}
                            />

                            <label
                                htmlFor="phone"
                                className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                                Phone Number:
                            </label>
                            <input
                                type="number"
                                id="phone"
                                className="w-full h-10 rounded-lg px-3 bg-transparent border border-gray-300 text-gray-800 dark:text-white focus:outline-none mb-4"
                                required
                                value={phone}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPhone(e.target.value)}}
                            />

                            <label      
                                htmlFor="dob"
                                className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                                Date of Birth:
                            </label>
                            <DatePicker 
                                setDate={setDOB}
                            />

                            <label
                                htmlFor="address"
                                className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                                Address:
                            </label>
                            <textarea
                                id="address"
                                className="w-full h-24 rounded-lg px-3 bg-transparent border border-gray-300 text-gray-800 dark:text-white focus:outline-none mb-2"
                                required
                                value={address}
                                onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setAddress(e.target.value)}}
                            />
                            <button 
                                className="font-medium w-fit px-4 h-10 rounded-lg mt-6 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 text-white dark:text-gray-100 mb-2"
                            >
                                Create Account
                            </button>
                            <p className="dark:text-white font-semibold mt-2">
                                or
                            </p>
                            <h1 
                                className="hover:underline mt-4  mx-1 px-3 rounded-md dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
                            >
                                <Link to={"/login"}>Already have an Account</Link> 
                            </h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>}
    </>
    );
};

export default RegisterPage;