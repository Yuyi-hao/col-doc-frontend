import { NavLink, resolvePath } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
function NavBar() {
    const [user, setUser] = useState("");
    const getProfile = async () => {
        try{
            const response = await api.get("accounts/me");
            if(response.status === 200){
                setUser(response.data.content.user);
            }
        }
        catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        getProfile();
    }, []);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">
                <img src="../../public/quby-typing-logo.gif" alt="" className="rounded" width="50px" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <div className="dropdown navbar-nav">
                    <img src={user.profile_pic} className="rounded-circle" alt="Profile Image" id="dropdownMenuButton" width="35px" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/accounts/me">Profile</a>
                        <a className="dropdown-item" href="/accounts/logout">Logout</a>
                    </div>
                </div>


            </div>
        </nav>
  )
}

export default NavBar;
