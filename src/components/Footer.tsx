const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className="flex w-screen justify-center">
            <footer className="dark:bg-darkTheme shadow bg-lightTheme mt-4 sticky bottom-0 w-fit">  
                    <span className="block text-sm font-semibold text-gray-500 text-center dark:text-gray-400">© {date} <a href="/" className="hover:underline">BankEase™</a>. All Rights Reserved.</span>
            </footer>
        </div>

    )
}

export default Footer