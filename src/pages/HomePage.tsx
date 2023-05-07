import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="md:mt-14">
      <section className="h-fit dark:bg-black bg-lightTheme md:p-4 flex justify-end items-center w-full">
          <div className="m-4 flex flex-col-reverse md:flex-row ">
            <div className="text-black dark:text-white text-lg font-medium pl-10 pb-3 md:pl-8 md:p-8 w-full md:w-3/4 space-y-8 ">
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
            <div className="p-8 flex flex-col h-1/2">
              <h1 className="animate-text font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  ">BANKEASE</h1>
              <h2 className="dark:text-white text-black font-base text-2xl ml-1">Banking Made Easy</h2>
              <div className="m-4 p-4 hidden md:pt-14 md:block dark:text-white">
              <ul
                    className="hidden md:flex flex-col items-center text-base font-semibold cursor-pointer ">
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