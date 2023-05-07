import {Link, useNavigate} from "react-router-dom";

interface errorPageProps {
    message: string;
}

const ErrorPage = ({message}:errorPageProps) => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center h-[94vh] bg-gray-100 dark:bg-black">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-16 max-w-2xl w-full flex flex-col items-center">
                {!message&&<h2 className="text-4xl font-bold mb-4 dark:text-gray-300">Oops! Something went wrong.</h2>}
                {message&&<p className="text-4xl font-bold mb-4 dark:text-gray-300 text-center ">{message}</p>}
                <div className="flex space-x-16 justify-center w-full mt-5">
                        <Link
                        to="/"
                        className="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                        Go to home page
                    </Link>
                    <button
                        onClick={()=>navigate(-1)}
                        className="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                        Go back
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;
