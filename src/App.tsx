import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter } from "react-router-dom";


const  App = ()=>{
  const [theme,setTheme] = useState("dark");
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  
  const changeThemeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <div className="min-w-screen min-h-screen dark:bg-darkTheme overflow-hidden">
      <BrowserRouter>
        <LandingPage ChangeThemeHandler={changeThemeHandler} theme={theme}/>
      </BrowserRouter>
    </div>
  );
}

export default App;