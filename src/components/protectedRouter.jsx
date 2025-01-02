import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants";

function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized] = useState(null);
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);
    const refreshToken = async () =>{
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try{
            const response = await api.post("/accounts/token/refresh/", {refresh_token:refreshToken});
            if(response.status === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.content.access_token);
                setIsAuthorized(true);
            }
        }
        catch(error){
            console.error(error);
            setIsAuthorized(false);
        }
    }
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(!token){
            setIsAuthorized(false);
            return;
        }
        const decode = jwtDecode(token);
        const tokenExpiration = decode.exp;
        const now = Date.now()/1000;
        if(tokenExpiration < now) await refreshToken();
        else setIsAuthorized(true);
    }
    if(isAuthorized === null){
        return <div>Loading.....</div>
    }
    return isAuthorized? children: <Navigate to="/accounts/login"/>
}

export default ProtectedRoute;