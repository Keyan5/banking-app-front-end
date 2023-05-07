import { useNavigate } from "react-router-dom";
import axios from "../assets/axiosConfig";
import { useEffect, useState } from "react";
import Loading from '../pages/Loading';

const Logout = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    useEffect(() => {
    const token = localStorage.getItem("token");
    const logout = async () => {
        setLoading(true);
        try{
            const response = await axios.get('/auth/logout',{
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            navigate('/');
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    }
    logout();
    }, [])
    return (
        <>
            {loading&&<Loading/>}
        </>
    );
}

export default Logout;