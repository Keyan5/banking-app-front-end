const customers = [
    {
        "customerId": "003",
        "accountNumber": "345678901",
        "name": "Bob Johnson",
        "transactionsMade": 31,
        "balance": 5100.00
    }, {
        "customerId": "001",
        "accountNumber": "123456789",
        "name": "John Doe",
        "transactionsMade": 25,
        "balance": 3500.00
    }, {
        "customerId": "006",
        "accountNumber": "678901234",
        "name": "Samantha Brown",
        "transactionsMade": 21,
        "balance": 2850.00
    }, {
        "customerId": "009",
        "accountNumber": "901234567",
        "name": "Mike Chen",
        "transactionsMade": 28,
        "balance": 4150.00
    }, {
        "customerId": "004",
        "accountNumber": "456789012",
        "name": "Mary Williams",
        "transactionsMade": 12,
        "balance": 2000.00
    }, {
        "customerId": "008",
        "accountNumber": "890123456",
        "name": "Lisa Kim",
        "transactionsMade": 15,
        "balance": 1950.00
    }, {
        "customerId": "002",
        "accountNumber": "234567890",
        "name": "Jane Smith",
        "transactionsMade": 17,
        "balance": 1250.00
    }, {
        "customerId": "007",
        "accountNumber": "789012345",
        "name": "David Jones",
        "transactionsMade": 9,
        "balance": 1450.00
    }, {
        "customerId": "005",
        "accountNumber": "567890123",
        "name": "Tom Lee",
        "transactionsMade": 6,
        "balance": 750.00
    }, {
        "customerId": "010",
        "accountNumber": "012345678",
        "name": "Emily Davis",
        "transactionsMade": 3,
        "balance": 250.00
    }
]

const TopCustomers = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <h5 className="px-4 pt-1 text-3xl font-bold text-gray-900 dark:text-gray-300 mb-1">Transaction History</h5>
            <h6 className="px-4 pt-1 text-xl font-bold text-gray-900 dark:text-gray-300 text-center mb-4">Top Customers are listed based on their Balance</h6>
            <section className = "container px-4 mx-auto " > 
                <div className="flex flex-col ">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div
                                className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800 ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <h1 className="text-center">
                                                        SI NO
                                                    </h1>
                                                </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                            Account No
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Name
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Transactions Made
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Balance
                                        </th>

                                    </tr>
                                        </thead>
                                        <tbody
                                            className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                customers.map((customer,index)=>
                                            <tr>
                                                <td
                                                    className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    <h1 className="text-center">{index+1}</h1>
                                                    </td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{customer.customerId}</td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{customer.accountNumber}</td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {customer.name}
                                                    </td>
                                                    <td
                                                        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            {customer.transactionsMade}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {customer.balance}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopCustomers