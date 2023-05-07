import { Link } from "react-router-dom"

const RegisterSuccess = () => {
    return (
        <div className="bg-transparent backdrop-blur-md h-screen w-screen flex justify-center items-center dark:text-white">
            <div className="space-y-5 w-11/12">
                <h1 className="text-4xl font-bold text-center text-green-500">Registration Successful</h1>
                <h2 className="text-2xl font-bold text-center">Login to continue</h2>
                <h2 className="text-xl font-bold text-center">Please check your E-mail for your credentials</h2>
                <div className="flex justify-center items-center space-x-16 md:space-x-32 mt-4">
                    <Link to="/login">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Login</button>
                    </Link>
                    <Link to="/">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccess