const CloseSymbol = ()=>{
    return (
        <div className='relative my-2'>
            <div className='w-6 h-1 bg-darkTheme dark:bg-lightTheme rounded mb-1 origin-center rotate-45 '></div>
            <div className='w-6 h-1 bg-darkTheme dark:bg-lightTheme rounded mb-1 origin-center -rotate-45 absolute top-0'></div>
        </div>
    );
}

export default CloseSymbol;