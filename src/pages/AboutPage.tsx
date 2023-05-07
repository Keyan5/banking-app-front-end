import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <div className="bg-gray-100 dark:bg-black mt-10 flex justify-center items-center h-[94vh]">
            <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="text-4xl font-medium text-gray-800 dark:text-white">
                        About Us
                    </span>
                </div>
                <div className="mt-12 font-medium">
                    <div className="max-w-3xl mx-auto space-y-6 ">
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Our banking app "BANKEASE" is designed to provide a secure and convenient way to manage
                            your finances online. With features such as deposit, withdraw, and transfer, you
                            can easily manage your accounts from the comfort of your own home.
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            We take security seriously and use the latest encryption technology to protect
                            your personal and financial information. Our app also prevents unauthorized transactions.
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            If you have any questions or concerns, please don't hesitate to <a className="hover:underline hover:text-blue-500"><Link to={"/contact"}>contact</Link></a> ourcustomer support team. You can find our contact information on our website or in
                            the app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage