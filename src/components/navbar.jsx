import { useEffect, useState } from "react";
import api from "../api/api";
import { getLoggedInUser } from "../utils";
function NavBar({fetchedUser}) {
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
                {isAuthorized?<>
                    <div className="dropdown navbar-nav">
                        <img src={userData.profile_pic} className="rounded-circle" alt="Profile Image" id="dropdownMenuButton" width="35px" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/accounts/me">Profile</a>
                            <a className="dropdown-item" href="/accounts/logout">Logout</a>
                        </div>
                    </div>
                </>:
                <>
                    <div className="">
                        <a type="button" href="accounts/login" className="btn btn-success">Login</a>
                        <a type="button" href="accounts/signup" className="btn btn-dark">Sign Up</a>
                    </div>
                </>
                }
            </div>
        </nav>
  )
}

export default NavBar;
