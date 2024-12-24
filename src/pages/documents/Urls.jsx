import { Route, Routes } from "react-router-dom";
import PublicDocumentView from "./PublicDocumentView";
import DocListing from "./DocListing";
function DocsRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="public-docs/:document_slug" element={ <PublicDocumentView/>} />

        <Route path="me/docs" element={ <DocListing/> }/>
        
      </Routes>
    </>
  );
}

export default DocsRoutes;
