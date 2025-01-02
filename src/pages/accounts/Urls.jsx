import { Route, Routes } from "react-router-dom";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import ProfileView from "./Profile";
import ProtectedRoute from "../../components/protectedRouter";
import { Navigate } from "react-router-dom";

function Logout(){
  localStorage.clear();
  return <Navigate to="/accounts/login"/>
}


function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route path="accounts/login" element={ <LoginForm/>} />
        <Route path="accounts/signup" element={ <SignupForm/> }/>
        <Route path="accounts/logout" element={ <Logout/> }/>
        <Route path="accounts/me" element={ <ProtectedRoute><ProfileView/></ProtectedRoute> }/>
      </Routes>
    </>
  );
}

export default AuthRoutes;
