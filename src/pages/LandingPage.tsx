
import { lazy,Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
const HomePage = lazy(()=>import ("./HomePage"))
const LoginPage = lazy(()=>import("./LoginPage")) 
const RegisterPage = lazy(()=>import("./RegisterPage")) 
const AboutPage = lazy(()=>import ("./AboutPage"))
const ErrorPage = lazy(()=>import ("./ErrorPage"))
const RegisterSuccess = lazy(()=>import ("../components/RegisterSuccess"))
import CustomerDashBoard, { ThemeProps } from './CustomerDashBoard';
import Loading from './Loading';
import AdminDashBoard from './AdminDashBoard';
import ContactUsPage from './ContactUsPage';


const LandingPage = ({ChangeThemeHandler,theme}:ThemeProps) => {

    const location = useLocation();

    const display = location.pathname!=="/dashboard";

    return (
        <>
          {display&&<NavBar ChangeThemeHandler={ChangeThemeHandler} theme={theme}/>}
          <Suspense fallback={<Loading/>} >
            <Routes>
              <Route  path="/" Component={HomePage}/>
              <Route  path="/login" Component={() => <LoginPage  theme={theme} />}/>
              <Route  path="/register" Component={() => <RegisterPage  theme={theme} />} />
              <Route path="/regiterSuccess" Component={RegisterSuccess}/>
              <Route  path="/about" Component={AboutPage}/>
              <Route  path="/contact" Component={ContactUsPage}/>
              <Route path="/dashboard" Component={() =><CustomerDashBoard  ChangeThemeHandler={ChangeThemeHandler} theme={theme}/>} />
              <Route path="/adminDashboard" Component={() =><AdminDashBoard  ChangeThemeHandler={ChangeThemeHandler} theme={theme}/>} />
              <Route  path="/error" Component={()=><ErrorPage message=''/>} />
              <Route  path="*" Component={()=><ErrorPage message=''/>} />
            </Routes>
          </Suspense>
          {display&&<Footer/>}
        </>
    )
}

export default LandingPage