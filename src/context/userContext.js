import React, {createContext, useContext, useState, useEffect} from 'react';
import api from '../api/api';
import { API_URL_USER_PROFILE } from '../api/endpoints';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) =>{
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await api.get(API_URL_USER_PROFILE);
                if(response.status === 200){
                    setUserData(response.data.content)
                }
            }catch (error){
                console.error('Failed to fetch user data: ', error);
                setUserData(null);
            }
        }
        fetchUserData();
    }, []);
    return (
        <UserContext.Provider values={userData}>
            {children}
        </UserContext.Provider>
    )
}