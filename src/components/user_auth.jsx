import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, LOGGED_IN_USER, REFRESH_TOKEN } from "../constants";
import api from "../api/api"

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
        <form onSubmit={handleFormSubmission} className="container py-5 h-100" method="POST">
            <h1 className="text-center">{formName}</h1>
            <div className="form-outline mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="user@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {(method === "register") ?
                <>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="form-control" type="text" name="username" id="username" placeholder="Your Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="date-of-birth">Date of Birth</label>
                        <input className="form-control" type="date" name="date-of-birth" id="date-of-birth" placeholder="YYYY-MM-DD" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                    </div>
                </> :
                <></>} 
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {(method === "register") ?
                <>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
                        <input className="form-control" type="password" name="confirm_password" id="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                </> : <></>}
            <button type="submit" className="btn btn-primary btn-block mb-4">{formName}</button>
            {(method === "register") ?
                <>
                    <p className="text-center">Already have an account? <a href="/accounts/login">Sign In</a></p>
                </> : 
                <>
                    <p className="text-center">Not a member? <a href="/accounts/signup">Sign Up</a></p>
                </>
            }
        </form>
    )
}

export default UserAuthForm;