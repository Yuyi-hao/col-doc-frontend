import { Route, Routes } from "react-router-dom";
import PublicDocumentView from "./PublicDocumentView";
import DocListing from "./DocListing";
import ProtectedRoute from "../../components/protectedRouter";

function DocsRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="public-docs/:document_slug" element={ <PublicDocumentView/>} />

        <Route path="me/docs" element={ <ProtectedRoute> <DocListing/> </ProtectedRoute> }/>
        
      </Routes>
    </>
  );
}

export default DocsRoutes;
