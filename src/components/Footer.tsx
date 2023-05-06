const Footer = () => {
    const date = new Date().getFullYear()
    return (
        
<footer className="dark:bg-darkTheme shadow bg-lightTheme mt-4 fixed bottom-0 w-full">  
        <span className="block text-sm font-semibold text-gray-500 text-center dark:text-gray-400">© {date} <a href="/" className="hover:underline">BankEase™</a>. All Rights Reserved.</span>
</footer>

    )
}

export default Footer