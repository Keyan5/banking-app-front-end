import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";
import axios from '../assets/axiosConfig';

function PasswordChanger() {
    const [newPassword,setNewPassword] = useState("");
    const [message,setMessage] = useState("");
    const [progress,setProgress] = useState("");

    const [hideNewPassword,setHideNewPassword] = useState(true);

    const [changePassword,setChangePassword] = useState(true);
    
    const [savePassword,setSavePassword] = useState(false);

    const [status,setStatus] = useState("")

    const handlePassword = (passwordValue:string) => {
        const strengthChecks = {
            length: false,
            hasUpperCase: false,
            hasLowerCase: false,
            hasDigit: false,
            hasSpecialChar: false
        };

        strengthChecks.length = passwordValue.length >= 8
            ? true
            : false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
        strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
        strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

        let verifiedList = Object
            .values(strengthChecks)
            .filter((value) => value);

        let strength = verifiedList.length == 5
            ? "Strong"
            : verifiedList.length >= 2
                ? "Medium"
                : "Weak";

        setNewPassword(passwordValue);
        setProgress(`${ (verifiedList.length / 5) * 100}%`);
        setMessage(strength);

    };

    const getActiveColor = (type:string) => {
        if (type === "Strong") 
            return "#8BC926";
        if (type === "Medium") 
            return "#FEBD01";
        return "#FF0054";
    };

    const handleSavePassword = async(password:string) => {
        const token = localStorage.getItem('token');
        try{
            const response = await axios.post('/ChangePassword',JSON.stringify({
                newPassword: password
            }),
            {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            setStatus(response.data.Status)
            setTimeout(() => setStatus(""), 3000);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <>
        {
            status&& <p className="text-[0.7rem] font-medium mt-[0.8rem] tracking-[0.05rem] text-green-600 ">
            Password Changed Successfully
        </p>
        }
        {savePassword&&<div className="h-full w-full flex flex-col justify-center items-center bg-transparent font-sans ">
            <div className=" w-[25rem] bg-transparent text-gray-900 dark:text-gray-300 overflow-hidden my-2">

                <div className="px-4 py-[1.2rem]">
                    <div className="rounded-lg  overflow-hidden ">
                        <div className="flex items-center px-4 py-[0.2rem] relative">
                            <input
                                value={newPassword}
                                onChange={({target}) => {
                                handlePassword(target.value);
                            }}
                                type={hideNewPassword
                                ? "password"
                                : "text"}
                                className=" w-80 text-[1rem] tracking-[0.08rem] font-medium outline-none border-none py-[0.8rem] px-[0.3rem] bg-transparent text-black dark:text-white placeholder:text-gray-800 dark:placeholder:text-[#b8bac5] placeholder:text-[0.9rem] placeholder:font-sans"
                                placeholder="Enter New Password"/>

                            <a
                                href="#"
                                className="dark:text-[#c3c3c3] text-gray-500 mt-2"
                                onClick={() => {
                                setHideNewPassword(!hideNewPassword);
                            }}>
                                {
                                    hideNewPassword
                                    ? <FontAwesomeIcon icon={faEye} />
                                    : <FontAwesomeIcon icon={faEyeSlash} />
                                }
                            </a>
                        </div>
                        <div className=" w-full h-1 bg-[#fbfbfb] relative rounded-t-none rounded-b-[0.2rem]">
                            <div
                                className={`h-1 absolute transition-all duration-500 ease-out rounded-t-none rounded-b-[0.2rem]`}
                                style={{
                                    width: progress,
                                    backgroundColor: getActiveColor(message)
                            }}
                            ></div>
                        </div>
                        <p className="flex flex-col">
                            <span className="text-[0.7rem] font-medium mt-[0.8rem] tracking-[0.05rem] dark:text-gray-200 text-black">
                                Password must be at least 8 characters long
                            </span>
                            <span className="text-[0.7rem] font-medium mt-[0.8rem] tracking-[0.05rem] dark:text-gray-200 text-black">
                                Must contain at least  1 uppercase, 1 lowercase, 1 special character, 1 number
                            </span>
                        </p>
                    </div>

                    {newPassword.length !== 0
                        ? (
                            <p
                            className=" text-[0.7rem] font-medium mt-[0.8rem] tracking-[0.05rem] text-[#ff6837] "
                                style={{
                                    color: getActiveColor(message)
                                }}>
                                Your password is {message}
                            </p>
                        )
                        : null}
                </div>
            </div>
        </div>}
        {changePassword&&<button
                    className={`text-gray-100 dark:text-gray-200 font-medium font-xl bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 w-fit mt-4 p-2 rounded-md`}
                    onClick={()=>{
                        setChangePassword(false)
                        setSavePassword(true)
                    }}
                >
                    Change Password
                </button>}
                {savePassword&&<button
                    className={`text-gray-100 dark:text-gray-200 font-medium font-xl bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 w-fit m-2 p-2 rounded-md`}
                    onClick={()=>{
                        setChangePassword(true)
                        handleSavePassword(newPassword);
                        setSavePassword(false)
                    }}
                >
                    Save Password
                </button>}
    </>
    );
}

export default PasswordChanger;