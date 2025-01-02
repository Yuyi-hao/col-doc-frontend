import NavBar from "../../components/navbar";
import { useState, useEffect } from "react";
import api from "../../api";
function ProfileView(){
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
        <>
            <NavBar/>
            <h1 className="text-center mb-100">Profile</h1>
            <div className="container d-flex flex-row flex-wrap justify-content-around">
                <div>
                    <img src={user.profile_pic} alt="" />
                </div>
                <div className="">
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Date Of Birth</th>
                            <td>{user.date_of_birth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Last_Login</th>
                            <td>{user.last_login}</td>
                        </tr> 
                        <tr>
                            <th scope="row">Created_At</th>
                            <td>{user.created_at}</td>
                        </tr> 
                        <tr>
                            <th scope="row">Modified_At</th>
                            <td>{user.modified_at}</td>
                        </tr> 
                        <tr>
                            <th scope="row">Nickname</th>
                            <td>{user.nickname}</td>
                        </tr> 
                        <tr>
                            <th scope="row">Email</th>
                            <td>{user.email}</td>
                        </tr> 
                        <tr>
                            <th scope="row">Description</th>
                            <td>{user.description}</td>
                        </tr> 
                        <tr>
                            <th scope="row">Location</th>
                            <td>{user.location}</td>
                        </tr> 
                    </tbody>
                </table>
                </div>
            </div>
            <h1 className="text-center">Document</h1>
            <div className="container d-flex flex-row flex-wrap justify-content-between">
                <div className="card mb-3" style={{"max-width": "20rem"}}>
                    <div className="card-header text-center ">Your Documents</div>
                    <div className="card-body text-success">
                        <h1 className="text-center">123</h1>
                    </div>
                    <div class="card-footer bg-transparent">You have created 123 Documents</div>
                </div>
                <div className="card mb-3" style={{"max-width": "20rem"}}>
                    <div className="card-header text-center">Shared Documents</div>
                    <div className="card-body text-success">
                        <h1 className="text-center">123</h1>
                    </div>
                    <div class="card-footer ">You share 123 Documents</div>
                </div>
                <div className="card mb-3" style={{"max-width": "20rem"}}>
                    <div className="card-header text-center  ">Storage</div>
                    <div className="card-body text-success">
                        <h1 className="text-center">123</h1>
                        <progress id="file" value="32" max="100"> 32% </progress>
                    </div>
                    <div class="card-footer bg-transparent">12gb out of 15gb is used</div>
                </div>
            </div>
            
        </>
    )
}

export default ProfileView;