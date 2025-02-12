import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import api from "./api";

export function naturalTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${date.toISOString().slice(0, 16).replace("T", " ")} | ${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }
    return `${date.toISOString().slice(0, 16).replace("T", " ")} | Just now`;
}

const refreshToken = async () => {
    const refreshTokenVal = localStorage.getItem(REFRESH_TOKEN);
    try{
        const response = await api.post("/accounts/token/refresh", {refreshToken:refreshTokenVal});
        if(response.status === 200){
            localStorage.setItem(ACCESS_TOKEN, response.date.content.access_token);
            return true;
        }
    }catch(error){
        console.error(error);
    }
    return false;
}

export const isAuthenticatedUser = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if(!token){
        localStorage.clear();
        return false;
    }
    const decode = jwtDecode(token);
    const tokenExpiration = decode.exp;
    const current_time = Date.now()/1000;
    if(tokenExpiration < current_time){
        const refresh_token_response = await refreshToken();
        if(!refresh_token_response){
            localStorage.clear();
            return false;
        }
    }
    return true;
};

export const getLoggedInUser = async () => {
    const isLoggedIn = await isAuthenticatedUser();
    if(!isLoggedIn) return false;
    try{
        const userResponse = await api.get("accounts/me");
        if(userResponse.status === 200){
            return userResponse.data.content;
        }
    }
    catch(error){
        console.error(error);
    }
    return false;
}