import NavBar from "../../components/navbar";
import api from "../../api";
import { useEffect, useState } from "react";

function DocListing(){
    const [ownDocs, setOwnDocs] = useState("");
    const [sharedDocs, setSharedDocs] = useState("");
    const getUserDocs = async () => {
        try{
            const response = await api.get("documents/me/documents");
            if(response.status === 200){
                setOwnDocs(response.data.content.document_owned);
                setSharedDocs(response.data.content.document_shared);
            }
        }
        catch(error){
            console.error(error);
        }
    };
    useEffect(() => {
        getUserDocs();
    }, []);
    return (
        <>
            <NavBar/>
            <div className="container">
                <h1>Your Documents</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">updated at</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Share count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default DocListing;