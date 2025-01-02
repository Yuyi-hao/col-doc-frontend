import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, LOGGED_IN_USER, REFRESH_TOKEN } from "../constants";
import api from "../api"

function UserAuthForm({ route, method }) {
    const formName = method === 'login' ? "Login" : "Signup";

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleFormSubmission = async (e) => {
        setLoading(true);
        e.preventDefault();
        try{
            let response;
            if (method=== "login"){
                response = await api.post(route, {email, password});
            } 
            else if(method === "register"){
                response = await api.post(route, {email, password, username, dateOfBirth, confirmPassword});
            }
            localStorage.setItem(ACCESS_TOKEN, response.data.content.access_token);
            localStorage.setItem(REFRESH_TOKEN, response.data.content.refresh_token);
            navigate("/home")
        }
        catch(error){
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }
    const labelClasses = "block";
    return (
        <form onSubmit={handleFormSubmission} className="flex flex-col gap-y5" method="POST">
            <h1>{formName}</h1>
            <div className="flex flex-col gap-y-5">
                <label className={labelClasses} htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="user@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                {(method === "register") ?
                    <>
                        <label className={labelClasses} htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Your Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label className={labelClasses} htmlFor="date-of-birth">Date of Birth</label>
                        <input type="date" name="date-of-birth" id="date-of-birth" placeholder="YYYY-MM-DD" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                    </> :
                    <></>}
                <label className={labelClasses} htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {(method === "register") ?
                    <>
                        <label className={labelClasses} htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" name="confirm_password" id="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/></> : <></>}
            </div>
            <button type="submit" className="btn btn-primary">{formName}</button>
        </form>
    )
}

export default UserAuthForm;