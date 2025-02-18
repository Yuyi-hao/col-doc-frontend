import NavBar from "../../components/navbar";
import api from "../../api/api";
import {naturalTime} from "../../utils"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                        <th scope="col">Share count</th>
                        <th scope="col">Created at</th>
                        <th scope="col">updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ownDocs.length > 0?(
                            ownDocs.map((document, index) => (
                                <tr key={document.id || index}>
                                    <th scope="row">{index}</th>
                                    <td><Link to="{`/public-docs/${document.slug}`}">{document.title}</Link></td>
                                    <td>{document.id}</td>        
                                    <td>{naturalTime(document.created_at)}</td>        
                                    <td>{naturalTime(document.modified_at)}</td>
                                </tr>
                            ))
                        ):(
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No documents found.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

                <h1>Shared Documents</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Share count</th>
                        <th scope="col">Created at</th>
                        <th scope="col">updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sharedDocs.length > 0?(
                            sharedDocs.map((document, index) => (
                                <tr key={document.id || index}>
                                    <th scope="row">{index}</th>
                                    <td>{document.title}</td>
                                    <td>{document.id}</td>        
                                    <td>{naturalTime(document.created_at)}</td>        
                                    <td>{naturalTime(document.modified_at)}</td>
                                </tr>
                            ))
                        ):(
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No documents found.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default DocListing;