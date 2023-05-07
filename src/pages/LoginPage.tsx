import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from '../assets/axiosConfig';
import { RegisterPageProps } from "./RegisterPage";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = ({theme}:RegisterPageProps) => {

    const [customerID,setCustomerID] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [hidePassword,setHidePassword] = useState(true);

    const [errorMessage,setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    const handleLogin = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const response = await axios.post('/auth/authenticate',{
                uid: customerID,
                password
            });
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role', response.data.role)
            if(response.data.errormessage)
            {
                setErrorMessage(response.data.errormessage);
                setTimeout(() => setErrorMessage(""), 3000);
                return;
            }
            if(response.data.role === 'ROLE_USER')
                navigate("/dashboard");
            if(response.data.role === 'ROLE_ADMIN')
                navigate("/adminDashboard");
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    }

    return (
        <div className="dark:bg-darkTheme bg-lightBlend min-h-[94vh] min-w-screen flex justify-center items-center mt-5">
            <div className="dark:bg-darkBlend bg-lightTheme sm:w-1/2 md:w-1/2  h-1/2 rounded-lg text-center w-11/12">
                <h1 className="text-3xl font-bold text-darkTheme dark:text-lightTheme mt-4 ">Welcome back!</h1>
                <form 
                    className="flex flex-col justify-center items-center" 
                    onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{handleLogin(e)}}
                >   
                    {theme==="dark"?<img src="/logo-transparent.svg" className="w-1/2 md:1/4 lg:1/6 my-2" alt="BankEase"/>:<img src="/logo-black-on-white-transparent.svg" className="w-1/2 md:1/4 lg:1/6 mt-5" alt="BankEase"/>}
                    <input 
                        type="text" 
                        value={customerID}
                        onChange={(event:React.FormEvent<HTMLInputElement>)=>setCustomerID(event.currentTarget.value)}
                        className="w-1/2 rounded-md h-10 mt-5 px-1 bg-transparent dark:caret-lightTheme text-darkTheme dark:text-lightTheme text-center focus:outline-none  dark:focus:border-b-2 border border-gray-300 " 
                        placeholder="CustomerId" 
                        required
                        autoComplete="true"
                    />
                    <div className="w-full ml-2">
                        <input 
                            type={hidePassword?'password':'text'} 
                            value={password}
                            onChange={(event:React.FormEvent<HTMLInputElement>)=>setPassword(event.currentTarget.value)}
                            className="w-1/2 rounded-md h-10 mt-5 px-1 bg-transparent caret-darkTheme text-darkTheme dark:caret-lightTheme dark:text-lightTheme text-center focus:outline-none  dark:focus:border-b-2 ml-4 border border-gray-300 " 
                            placeholder="Password" 
                            required
                            autoComplete="true"
                            />
                        <a
                            className="text-[#c3c3c3] mt-2 pl-2"
                            onClick={() => setHidePassword(!hidePassword)}>
                            {
                                hidePassword
                                ? <FontAwesomeIcon icon={faEye} />
                                : <FontAwesomeIcon icon={faEyeSlash} />
                            }
                        </a>
                    </div>
                    <button 
                        type="submit"
                        className="w-1/2 h-10 rounded-lg mt-8 bg-emerald-500 dark:bg-emerald-700 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-gray-100  font-normal"
                    >
                        Login
                    </button>
                    <p className="dark:text-white font-semibold mt-2">
                        or
                    </p>
                    <h1 
                        className="hover:underline mt-1 mx-1 px-3 rounded-md dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
                    >
                        <Link to={"/register"}>Create an Account</Link> 
                    </h1>
                </form>
            </div>
        </div>
    )
}

export default LoginPage