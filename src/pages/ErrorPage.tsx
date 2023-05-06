import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-[94vh] bg-gray-100 dark:bg-black">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-16 max-w-2xl w-full flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-4 dark:text-gray-300">Oops! Something went wrong.</h2>
                {/* <p className="text-gray-700 mb-6">{message}</p>
                <p className="text-gray-700 mb-6">{solution}</p> */}
                <Link
                    to="/"
                    className="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Go to home page
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
