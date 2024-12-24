import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import AuthRoutes from "./pages/accounts/Urls";
import DocsRoutes from "./pages/documents/Urls";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <AuthRoutes />
      <DocsRoutes />
      {/* <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
