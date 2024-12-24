import { useParams } from "react-router-dom";

function PublicDocumentView(){
    const {document_slug} = useParams();
    return <div>
        {document_slug}
    </div>
}

export default PublicDocumentView;