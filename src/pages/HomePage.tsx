import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="mt-28 min-[375px]:mt-12 min-[425px]:mt-5 md:mt-28 flex justify-center items-center lg:h-fit ">
      <section className="h-full dark:bg-black bg-lightTheme md:px-4 flex justify-end items-center w-full xl:w-11/12">
          <div className="flex flex-col-reverse lg:flex-row w-full">
            <div className="h-full min-[425px]:h-fit text-black dark:text-white text-lg font-medium pl-7 pr-3 sm:pl-10 sm:pb-3 md:pl-8 md:p-8 w-full space-y-7 sm:mb-0  ">
              <p>
                Our banking app is a web-based application built using the Spring Boot framework for the backend, PostgreSQL for the database, and React for the frontend. The application provides various functionalities related to banking, including account creation, transaction management, and balance inquiry.
              </p>
              <p>
                Users can create their accounts, and after logging in, they can view their account details such as account number, balance, and transaction history. They can also perform various transactions such as deposit, withdrawal, and transfer between accounts.
              </p>
              <p>
                The application is secured, and user data is encrypted to ensure the privacy and confidentiality of user information.
              </p>
              <p>
                The application also includes an admin page where the administrator can view various statistics such as customer count, total transactions count, and top customers. Customers can also view their respective transaction count and change their passwords. Additionally, they can copy their account number and customer ID for reference.
              </p>
            </div>
            <div className="pl-7 min-[375px]:p-8 sm:p-8 pb-8 flex flex-col justify-center  ">
              <h1 className="animate-text font-extrabold text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  ">BANKEASE</h1>
              <h2 className="dark:text-white text-black font-base text-2xl sm:ml-1">Banking Made Easy</h2>
              <div className="hidden lg:pt-14 md:block dark:text-white">
              <ul
                    className="hidden lg:flex flex-col items-center text-base font-semibold cursor-pointer ">
                    <li 
                        className=" hover:underline my-2 mx-1 py-2 px-3 rounded-md hover:text-blue-500"
                    >
                        <Link to={"login"}>Already Have an Account</Link>                            
                    </li>
                    <li 
                        className="hover:underline  my-2 mx-1 py-2 px-3 rounded-md hover:text-blue-500"
                    >
                        <Link to={"register"}>Create an Account</Link> 
                    </li>
                    <li 
                        className=" hover:underline  my-2 mx-1 py-2 px-3 rounded-md hover:text-blue-500"
                    >
                        <Link to={"contact"} >Want to Contact Us</Link>
                        
                    </li>
                    <li 
                        className=" hover:underline my-2 mx-1 py-2 px-3 rounded-md hover:text-blue-500"
                    >
                        <Link to={"about"}>Know About Us</Link>
                        
                    </li>
                </ul>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default HomePage