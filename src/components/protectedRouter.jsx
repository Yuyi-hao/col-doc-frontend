import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants";
import {getLoggedInUser} from "../utils"

export const AuthContext = createContext();

function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized] = useState(true);
    const [userData, setDataUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {try{
            const fetchedUser = await getLoggedInUser();
            if(!fetchedUser){
                setIsAuthorized(false);
                setDataUser(null);
            }
            setIsAuthorized(true);
            setDataUser(fetchedUser);
        }
        catch(error){
            console.error(error)
        }}
        fetchUser();
    }, []);
    
    if(isAuthorized === false){
        return <div>Loading.....</div>
    }
    return (
        isAuthorized?
        <AuthContext.Provider value={{isAuthorized, userData}}>
            {children}
        </AuthContext.Provider>:
        <>
            <Navigate to="/accounts/login"/>
        </>
    )
}

export default ProtectedRoute;